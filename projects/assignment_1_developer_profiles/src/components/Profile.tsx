import './Profile.css'
import SkillTag from './SkillTag'

export default function Profile({profile}){
    function getSeniority(experience) {
        if (experience < 3) {
            return "Junior";
        }else if (experience < 5) {
            return "Midlevel";
        } else {
            return "Senior";
        }
    }
    return (
        <>
            <div className="card">
                <h1>{profile.name}</h1>
                <h2>{profile.role}</h2>
                <h3>{profile.location}</h3>
                <h3>{getSeniority(profile.experience)}</h3>
                <h3 style={{"color": profile.available ? "green" : "red"}}>
                    {profile.available? "Available" : "Unavailable"}
                </h3>
                <div className="skill-container">
                    {
                        profile.skills.map(
                            (skill, index) => (
                                <SkillTag key={index} skill={skill} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}