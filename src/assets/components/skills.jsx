import React from 'react';
function Skills() {
    return (
        <>
            <div className='skillheader'>SKILLS</div>
            <div className='skills' style={{ padding: "30px", display: "flex", gap: "40px" }}>
                <button>HTML</button>
                <button>CSS</button>
                <button>JavaScript</button>
                <button>React</button>
                <button>Django</button>
                <button>Git</button>
                <button>Github</button>
                <button>responsive design</button>
            </div>
        </>
    )
}
export default Skills;
