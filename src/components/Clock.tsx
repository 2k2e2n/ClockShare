/*
 ######  ####      #####    ######  ###  ##
#######  ####     #######  #######  ###  ##
###  ##   ##      ##   ##  ###  ##   ## ##
##        ##      ##   ##  ##        ####
##        ##      ##   ##  ##        #####
###  ##   ##  ##  ##   ##  ###  ##   ## ##
#######  #######  #######  #######  ###  ##
 ######  #######   #####    ######  ###  ##

*/



import React, { useEffect, useState } from 'react';


type Props = {    //変数の型指定
    time: number;
}

const Clock: React.FC<Props>  = ({ time }) => {

    let [timeS, settimeS] = useState<number>(0); //秒
    let [timeM, settimeM] = useState<number>(0); //分
    let [timeH, settimeH] = useState<number>(0); //時

    useEffect(() => {
        settimeS(time % 60);
        settimeM(Math.floor(time / 60) % 60);
        settimeH(Math.floor(time / (60*60)) % 24);
    }, [time]);

    //0:4:20->00:04:20  桁数をあわせる
    function padTime(value: number): string {
        return value.toString().padStart(2, '0');
    }

    return (
        <div>
            <div>
                {`${padTime(timeH)}:${padTime(timeM)}:${padTime(timeS)}`}
            </div>
        </div>
    );
};

export default Clock;
