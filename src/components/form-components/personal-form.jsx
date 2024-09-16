
export default function PersonalForm({personalInfo, onChangePersonalInfo})
{
    const name = personalInfo ? personalInfo.name : "";
    const location = personalInfo ? personalInfo.location : "";
    const email = personalInfo ? personalInfo.email : "";
    const phoneNumber = personalInfo ? personalInfo.phoneNumber : "";
    const about = personalInfo ? personalInfo.about : "";

    return (
        <>
            <h2>Personal Information</h2>
            <form className="personalForm flex flex-col ">
                <input type ="text" name ="name" value = {name} onChange={(e) => onChangePersonalInfo({name:e.target.value}) }/>
                <input type ="text" name ="location" value={location} onChange={(e) => onChangePersonalInfo({location:e.target.value}) }/>
                <input type ="text" name ="email" value={email} onChange={(e) => onChangePersonalInfo({email:e.target.value}) }/>
                <input type ="text" name ="phoneNumber" value={phoneNumber} onChange={(e) => onChangePersonalInfo({phoneNumber:e.target.value}) }/>
                <textarea name="about" value={about} onChange={(e) => onChangePersonalInfo({about:e.target.value}) }></textarea>
            </form>
        </>
    )
}