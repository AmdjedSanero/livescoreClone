import { View, Text } from 'react-native'
import React from 'react'
import PlayerInTactic from './PlayerInTactic'

const Tactic = ({ tactics }) => {


    const trm = tactics.tactic.split("-");
    const isHome = tactics.isHome ? "top" : "bottom";
    const isHomeLR = tactics.isHome ? "left" : "right";


    let playerIndex = 0;
    const row = isHome ? 'flex-row' : 'flex-row-reverse';
    let tactic433 = tactics.tactic.slice(2);

    return (
        <>
            <View className={` flex-row   bg-gray-100 px-2 rounded-full  z-50  absolute ${isHome}-[20] `} style={{
                [isHome]: 20,
                [isHomeLR]: 10

            }}>
                <Text className="text-[#58741f]" >{tactic433}</Text>
            </View>
            {trm.map((cols, index) => (
                <View className={`w-full  ${row} h-20 justify-around items-center   z-50  absolute`} style={{
                    [isHome]: (index) * 80,

                }}
                    key={index} >
                    {Array.from({ length: parseInt(cols) }, (_, colIndex) => {
                        const currentPlayer = tactics.players[playerIndex];
                        playerIndex++;
                        return <PlayerInTactic player={currentPlayer} key={colIndex} isHome={tactics.isHome} />;
                    })}
                </View>
            ))}

        </>
    )
}

export default Tactic