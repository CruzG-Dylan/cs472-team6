import { Gradients } from "../../utils/utils";

export default function SocialMediaOption({options, updateComponent}){
    let {title, body, image, gradient, socials, socialCount} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    function handleSocialChange(index, e){
        let newSocial = [...socials];
        newSocial[index] = {...newSocial[index], [e.target.name]: e.target.value};

        updateComponent({socials: newSocial})
    }

    
    return (
        <div className='p-3'>

            <label className="block">Title:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="title" value={title} onChange={(handleChange)} />
            <label className="block">Title Gradient:</label>
            <select value={gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
            <label className="block">Body:</label>
            <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="body" value={body} onChange={(handleChange)} />
            <label className="block">Image Link:</label>
            <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="image" value={image} onChange={(handleChange)} />
            
            <details>
            <summary>Social Options</summary>
            <label className="block">Number of Socials</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="number" name="socialCount" value={socialCount} min="0" max="6" onChange={(handleChange)}/>
            {socials.slice(0,socialCount).map((social, index) => {
                    return(
                        <SocialMediaOptions key={index} index={index} social={social} handleSocialChange={handleSocialChange}/>
                    )
                })}
            </details>
        </div>
    )
}
function SocialMediaOptions({social, index, handleSocialChange}) {
    const {image, link} = social;
    return (
        <div>
            <label className="block">Icon {index + 1} Image Link:</label>
            <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="image" value={image} onChange={e => handleSocialChange(index, e)} />
            <label className="block">Reference {index + 1} Link:</label>
            <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="link" value={link} onChange={e => handleSocialChange(index, e)} />
            
        </div>
    )
}