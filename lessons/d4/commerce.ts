type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  height?: number;
  width?: number;
  weight?: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type Order = {
  items: CartItem[];
  price: number;
};

type ProductPreview = Pick<Product, "name" | "price">;

type UpdateProductInput = Partial<Product>;

function groupBy<T>(
  items: T[],
  keyFn: (item: T) => string,
): Record<string, T[]> {
  return items.reduce<Record<string, T[]>>((groups, item) => {
    const key = keyFn(item);

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(item);

    return groups;
  }, {});
}

function cartTotal(items: CartItem[]): number {
  return items.reduce<number>((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);
}

function updateProduct(product: Product, update: UpdateProductInput) {
  Object.assign(product, update);
  /*
  // typescript is unable to determine what the type of product[key] is inside a loop
  // it tries to evaluate product[key: keyof Product] => which is treated as 
  // product[key: Product["name" | "price" | "inStock"]] => product[key: string | number | boolean]
  //
  // in a loop its not possible to tell which key is being used and there for what the value type will be
  // which causes a fuss
  // one way around this is to write: (product as any)[key] = value;
  // instead I opt for the faster route, where types are already known and stable
  for (const key of Object.keys(update) as (keyof UpdateProductInput)[]) {
    const value = update[key];
    
    if (value !== undefined) {
        product[key] = value as Product[typeof key];
    }
  }
    */
}

// Various function
// Partial, Required, Readonly, Pick, Omit
