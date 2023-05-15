
interface propsType {
    logo: string;
    period: string;
    school: string;
    major: string;
}


const EduDetail = (props: propsType) => {

    return (
        <div>
            <div >   
                <img src={props.logo}/>
            </div>
            <div>
                <p className="bold">{props.period}</p>
                <p className="bold">{props.school}</p>
                <p>{props.major}</p>
            </div>
        </div>
    )
}

export default EduDetail;