import React from 'react'
import './Banner.css';
import useJwt from '../../Util'
import {connect} from 'react-redux'

function Banner(props) {
    const searchRef = React.useRef();
    const inputRef = React.useRef();
    const skillIdRef = React.useRef();
    const [change, setChange] = React.useState(true);
    const [skills, setSkills] = React.useState([]);
    const [skillsList, setSkillsList] = React.useState([]);

    // searchRef.current[1] = React.createRef()
    // searchRef.current[2] = React.createRef()
    
    const handleChange = () =>{
        setChange(!change)
    }
    const getSkills = async () => {
        await useJwt.post('skills').then((res)=>{
            props.SET_SKILLS(res.data.records);
            setSkills(res.data.records);
        })
        
    }
   
    React.useEffect( async ()=>{
        searchRef.current.style.display = 'none'
        await getSkills();
        
    },[])
    const setskillsData = (value) =>{
        inputRef.current.value = value.name
        skillIdRef.current.value = value.id
        searchRef.current.style.display = 'none'
        setSkillsList([])
    }
    const searchSkills = (value) =>{
       if (value.length > 0) {
        searchRef.current.style.display = 'block'
        let filtered =[];
        for (var j=0; j<skills.length; j++) {
            if (skills[j]['name'].toLowerCase().match(value.toLowerCase())) {
                filtered.push(skills[j])
            };
            
        }
        setSkillsList(filtered)
       }
       else{
            searchRef.current.style.display = 'none'
       }
    }

    /// To found experts
    const handleFoundExperts = () =>{
        
    } 

    return (
        <header>
            <div className="banner__content">
                <h6 className="banner__title">what services are you looking for?</h6>
                <p className="banner__desc">we help business build their tempor sodales at  sit amet quam etiam vel lascus consectetur</p>
            </div>
            <div className="banner__input">
                <div className="search_container">
                    <input type="text" ref={(elem)=> inputRef.current = elem } onChange={(e) => searchSkills(e.target.value)} className="input__field" placeholder="Accounting, Engineering, Solid Works, etc" />
                    <input type="hidden" ref={(elem)=> skillIdRef.current = elem } name="skill_id" />
                    <button onClick={()=>handleFoundExperts()} className="banner__button"></button>
                </div>
                <div className="search_results" ref={(elem)=> searchRef.current = elem } >
                    <ul className="search_r_ul">
                        { Object.values(skillsList).map((value,key)=>{
                            if (key < 4) {
                                return (<li onClick={()=>{setskillsData(value)}} key={key}>{value.name}</li>)   
                            }
                                   
                        })}
                    </ul>
                </div>
            </div>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      SET_SKILLS : (data) => dispatch({ type: 'SET_SKILLS', payload:data }),
    }
  }
function mapStateToProps(state) {
    const { skills } = state
    return { skillsData : skills.skillsData }
}
export default connect(mapStateToProps,mapDispatchToProps)(Banner)
