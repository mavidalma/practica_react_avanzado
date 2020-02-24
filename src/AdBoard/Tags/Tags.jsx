import React, {Component} from 'react';
import { getTags } from '../../api_caller';


export const Tags = async() => {

    const tags = await getTags();
    console.log(tags);

    return (
        tags.map((item, index) => {
            <input type="checkbox" value={item[index]}>{item[index]}</input>
        })
    )
}
/*
export class Tags extends Component {


}*/