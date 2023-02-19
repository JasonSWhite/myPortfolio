import React, { Component } from 'react';
import './stylesheet.css';
import meWithMountains from './sources/meWithMountains.jpeg';
import christmas2022 from './sources/christmas2022.jpeg';
import fredrickEugene2022 from './sources/fredrickEugene2022.jpeg';

class AboutMe extends Component {
  render() {
    return (
        <div>
            <div className="title">
                <h2>About Me</h2>
            </div>
            <div>
                <img src={meWithMountains} alt=" A photo of myself standing on a rocky beach with a lake and mountains
                    in the background from 2022."/>
                <figcaption>
                    A photo of myself standing on a rocky beach with a lake and mountains in the background from 2022.  
                </figcaption>
            </div>
            <div>
                <p>
                    Hello, my name is Jason White. I am a young, creative, newly graduated full stack developer! I have recently graduated
                    from Robertson College. I was born and raised in a small town and I now own a home with my fianc&#233;.
                </p>
                <img src={christmas2022} alt="my fianc&#233; and I on christmas in 2022." />
                <figcaption>
                    My fianc&#233; and I on Christmas in 2022.
                </figcaption>

                <p>
                    During my free time I enjoy reading, playing video games, expanding my knowledge on various subjects, and spending time
                    with my family.
                </p>
                <img src={fredrickEugene2022} />
                <figcaption>
                    Our dogs Fredrick James, our golden retriever &#40;back&#41; and Eugene Lucifer, our blue-merele border collie &#40;front&#41;.
                </figcaption>
            </div>
        </div>
    );
  }
}

export default AboutMe