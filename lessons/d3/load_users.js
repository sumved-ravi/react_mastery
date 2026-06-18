async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchUsers(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  return res.json();
}

async function loadUsers(url, word, attempt = 0) {
  const msg = attempt === 0 ? "Attempt #1" : `Reattempt #${attempt}`;
  console.log(msg);

  try {
    const users = await fetchUsers(url);
    return users
      .filter((user) => user.company.catchPhrase.includes(word))
      .map(({ name, email, address: { city } }) => ({
        name,
        email,
        city,
      }));
  } catch (err) {
    if (attempt >= 3) {
      console.error(`Unable to load users: ${err.message}`);
      return [];
    }

    console.log(`Sleeping ${2 * attempt}s`);
    await sleep(1000 * (2 * attempt));

    return loadUsers(url, word, attempt + 1);
  }
}

async function main() {
  // .then takes a function which is passed the resolved value
  // as such console.log is a function that can be passed
  // it is equivalent to
  // .then(users => console.log(users))

  // good url
  loadUsers("https://jsonplaceholder.typicode.com/users", "empowering")
    .then(console.log)
    .catch(console.error);

  // since the functions are async, loadUsers are called back to back and results are
  // returned overlaping
  // to prevent this adding a time divide between the two versions
  await sleep(5000);

  // bad url
  loadUsers("https://jsonplaceholder.typicode.com/users-bad-url", "empowering")
    .then(console.log)
    .catch(console.error);
}
