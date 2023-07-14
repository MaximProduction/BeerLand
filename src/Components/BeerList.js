import styles from './BeerList.module.css'
import React, { useState } from 'react';


export default function BeerList(props) {

    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
    };



    return (
        <div>

            <div className={styles.Container}>

                <div className={styles.firstFive}>
                    {props.data.map(item => (
                        <div key={item.id} >
                            {item.id <= 5 ?
                                <div className={styles.firstFive}>
                                    <p className={styles.describtion} key={item.id}>{item.name}</p>
                                    <img className={styles.razmer} src={item.image_url} />
                                </div>
                                : null
                            }
                        </div>
                    ))}
                </div >

                <div className={styles.firstFive}>
                    {props.data.map(item => (
                        <div key={item.id} >
                            {item.id <= 10 && item.id > 5 ?
                                <div className={styles.firstFive}>
                                    <p className={styles.describtion} key={item.id}>{item.name}</p>
                                    <img className={styles.razmer} src={item.image_url} />
                                </div>
                                : null
                            }
                        </div>
                    ))}
                </div >

                <div className={styles.firstFive}>
                    {props.data.map(item => (
                        <div key={item.id} >
                            {item.id <= 15 && item.id > 10 ?
                                <div className={styles.firstFive}>
                                    <p className={styles.describtion} key={item.id}>{item.name}</p>
                                    <img className={styles.razmer} src={item.image_url} />
                                </div>
                                : null
                            }
                        </div>
                    ))}
                </div >

                <div className={styles.firstFive}>
                    {props.data.map(item => (
                        <div key={item.id} >
                            {item.id <= 20 && item.id > 15 ?
                                <div className={styles.firstFive}>
                                    <p className={styles.describtion} key={item.id}>{item.name}</p>
                                    <img className={styles.razmer} src={item.image_url} />
                                </div>
                                : null
                            }
                        </div>
                    ))}
                </div >

                <div className={styles.firstFive}>
                    {props.data.map(item => (
                        <div key={item.id} >
                            {item.id <= 25 && item.id > 20 ?
                                <div className={styles.firstFive}>
                                    <p className={styles.describtion} key={item.id}>{item.name}</p>
                                    <img className={styles.razmer} src={item.image_url} />
                                </div>
                                : null
                            }
                        </div>
                    ))}
                </div >

                <div className={styles.firstFive} >
                    {props.data.map(item => (
                        <div key={item.id} >
                            {item.id <= 25 && item.id > 20 ?
                                <div className={styles.firstFive} onClick={handleButtonClick}>
                                    <button className={styles.describtion} key={item.id}>{item.name}</button>




                                    {/* {isButtonClicked ? <textarea
                                        id={item.id}
                                        style={{}}
                                        type="text"
                                        value={item.description}
                                        readOnly
                                    />


                                        : null
                                    } */}

                                    <img className={styles.razmer} src={item.image_url} />
                                    {isButtonClicked ? <button style={{ height: '50px' }}>delete</button> : null}
                                </div>
                                : null
                            }
                        </div>
                    ))}
                </div >


                <div className='firstFive'>
                    <div className='blockTest'>
                        <p className='describtion'>obolon</p>
                        <img id='1' src='https://images.punkapi.com/v2/keg.png' />

                        <img></img>
                    </div >


                    <img className='razmer' src='https://images.punkapi.com/v2/2.png' />
                    <img className='razmer' src='https://images.punkapi.com/v2/keg.png' />
                    <img className='razmer' src='https://images.punkapi.com/v2/keg.png' />
                    <img className='razmer' src='https://images.punkapi.com/v2/keg.png' />
                </div>
                <div className='firstFive'>
                    <img src='https://images.punkapi.com/v2/keg.png' />
                    <img src='https://images.punkapi.com/v2/2.png' />
                    <img src='https://images.punkapi.com/v2/keg.png' />
                    <img src='https://images.punkapi.com/v2/keg.png' />
                    <img src='https://images.punkapi.com/v2/keg.png' />
                </div>
                {/* {data.map(item => (
                <p key={item.id}>{item.id <= 10 ? item.id : null}  {item.id <= 5 ? item.name : null}    </p>
            ))} */}
                <div>

                </div>

            </div>
        </div>
    )
}


{/* <div className={styles.firstFive}>
{props.data.map(item => (
    <div key={item.id} >
        <div className={styles.firstFive}>
            <p className={styles.describtion} key={item.id}>{item.name}</p>
            <img className={styles.razmer} src={item.image_url} />

        </div>
    </div>
))}
</div> */}
