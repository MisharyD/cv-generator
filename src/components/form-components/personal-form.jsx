
export default function PersonalForm({personalInfo, onChangePersonalInfo})
{
    const name = personalInfo ? personalInfo.name : "";
    const location = personalInfo ? personalInfo.location : "";
    const email = personalInfo ? personalInfo.email : "";
    const phoneNumber = personalInfo ? personalInfo.phoneNumber : "";
    const about = personalInfo ? personalInfo.about : "";

    return (
        <>
            <form className="personalForm flex flex-col ">
                <input type ="text" name ="name" onChange={(e) => onChangePersonalInfo(e) }/>
                <input type ="text" name ="location" value={location} onChange={(e) => onChangePersonalInfo(e) }/>
                <input type ="text" name ="email" value={email} onChange={(e) => onChangePersonalInfo(e) }/>
                <input type ="text" name ="phoneNumber" value={phoneNumber} onChange={(e) => onChangePersonalInfo(e) }/>
                <textarea name="about" value={about} onChange={(e) => onChangePersonalInfo(e) }></textarea>
            </form>
        </>
    )
}