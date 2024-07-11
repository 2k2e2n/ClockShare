/*
 ######    #####     ##      #####   ######
 # ## #   ##   ##   ####    ##   ##  # ## #
   ##     ##   ##  ##  ##   ##         ##
   ##     ##   ##  ##  ##    #####     ##
   ##     ##   ##  ######        ##    ##
   ##     ##   ##  ##  ##   ##   ##    ##
  ####     #####   ##  ##    #####    ####

*/

//<Toast />をToastを使うサイトの一番最初に書いてください

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

type Props = {    //変数の型指定
}

const Toast: React.FC<Props>  = ({}) => {
    return (
        <div>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        </div>
    );
};

export default Toast;
