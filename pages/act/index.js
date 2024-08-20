import { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import Script from 'next/script';

export default function act() {

    return (
        <div className = "act_base">
            <div className ="Category">
                카테고리
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </div>
            <div className="button_group">
                <button>2024</button>
            </div>
            
        </div>
    );
};