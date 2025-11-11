import { Box } from "@mui/material";
import { useState } from "react";
import FirstInfo from "./components/firstInfo/FirstInfo";
import MyImg from "./components/myImg/MyImg";
import SkillsGrowBox from "./components/skillsGrowBox/SkillsGrowBox";
import { skills } from "./skills";

export default function HomePage() {

    // state
    const [isGrowOpen, setIsGrowOpen] = useState<boolean>(false)

    return (
        <Box sx={{
            color: 'primary.',
            overflowY: 'auto',
            height: '100%',
            display: "flex",
            flexDirection: {
                xs: 'column',
                lg: 'row-reverse',
            },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            padding: 2
        }}>
            <MyImg />
            <FirstInfo onShowSkills={() => { setIsGrowOpen(prev => !prev) }} />
            {isGrowOpen &&
                <Box onClick={() => { setIsGrowOpen(false) }} sx={{ zIndex: 2000, backdropFilter: 'blur(5px)', width: '100%', padding: 2, position: 'absolute', top: 0, left: 0, height: '100dvh', display: 'flex', justifyContent: 'center', overflowY: 'auto' }}>
                    <Box sx={{ marginY: "auto", flexWrap: 'wrap', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                        {skills.map((skill, index) => (
                            <Box sx={{ width: { xs: 300, sm: 200 } }}>
                                <SkillsGrowBox key={skill.name} index={index} skillIcon={skill.icon} skillName={skill.name} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            }
        </Box >
    )
}
