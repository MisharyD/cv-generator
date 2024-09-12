
export default function PersonalSection({personalInfo}) 
{
    const name = personalInfo ? personalInfo.name : "";
    const location = personalInfo ? personalInfo.location : "";
    const email = personalInfo ? personalInfo.email : "";
    const phoneNumber = personalInfo ? personalInfo.phoneNumber : "";
    const about = personalInfo ? personalInfo.about : "";

    return (
        <div className="personalSection">
            <div>Name: {name}</div>
            <div>Location: {location}</div>
            <div>email: {email}</div>
            <div>Phone number: {phoneNumber}</div>
            <div>About: {about}</div>
        </div>  
    )
}