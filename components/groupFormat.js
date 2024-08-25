import { useState, useEffect } from "react";

const groupFormat = (groupY) => {
    return (
        
    <div>
        {y2023.map((group, i) =>{
            return(
                <div key={group.name}>
                    <div>
                        {group.year}년도 {group.name}
                    </div>
                    <div>
                        모둠장 : {group.leader}, 모둠원 : {group.member}
                    </div>
                </div>
            )}) 
        }
    </div>
    
    );
};

export default groupFormat;
