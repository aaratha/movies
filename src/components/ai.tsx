import React from 'react';

export interface AIProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AI = ({ className }: AIProps) => {
    return (
        <div className='nu lg:w-[42.86%] p-[2px] bg-gradient-to-r from-co2 to-grad rounded-lg lg:ml-6 mt-6 lg:mr-6'>
            <div className='f flex flex-col h-full  rounded-lg'>
                <div className='justify-between nestflex flex flex-row pl-4 pr-4 p-1 rounded-xl items-center'>
                    <h1 className='ml-1 text-black font-bold'>AI:</h1>
                    <div>
                        <button className='but2 scale-93 hover:pl-3 hover:pr-3 transition-all text-black border-black ml-1 p-1 rounded-full border-2 hover:border-opacity-0'>Reception</button>
                        <button className='but2 ml-2 p-1 pl-2 pr-2 scale-93 rounded-full border-2 text-black border-black hover:border-opacity-0'>Background</button>
                        <button className='but2 ml-2 mr-1 p-1 pl-2 pr-2 scale-93 rounded-full border-2 text-black border-black hover:border-opacity-0'>Impact</button>
                    </div>
                </div>
                <div className='mt-[2px] p-4 h-full bg-gradient-to-b from-bg2 to-gray-900 rounded-lg overflow-scroll'>
                    <p className=' z-0'>
                    "Memoria" is a film directed by Apichatpong Weerasethakul, a renowned Thai filmmaker known for his unique and contemplative style. The film stars Tilda Swinton and explores themes of memory, identity, and the relationship between humans and the natural world. It received critical acclaim and has been regarded as an important addition to Weerasethakul's filmography. Here are a few reasons why "Memoria" is worth watching:
                    <li>
                        Directorial Vision: Apichatpong Weerasethakul is highly regarded for his distinctive style and his ability to create immersive and atmospheric cinematic experiences. "Memoria" continues his exploration of themes that have been prevalent in his previous works, such as the intersection of memory, spirituality, and nature. Watching "Memoria" allows viewers to appreciate Weerasethakul's unique perspective and the way he crafts his films
                    </li>
                    <li>
                        Performance: Tilda Swinton, a highly acclaimed actress, delivers a captivating performance in "Memoria." Her portrayal of a woman who is haunted by a mysterious sound triggers a journey of self-discovery and reflection. Swinton's talent and commitment to her craft enhance the film's emotional depth and resonance.
                    </li>
                    <li>
                        Cinematic Experience: "Memoria" offers a contemplative and meditative viewing experience. Weerasethakul's use of long takes, slow pacing, and stunning cinematography creates a sense of stillness and invites the audience to reflect on the film's themes. It's an opportunity to immerse oneself in the visuals and soundscape of the film, which can be a rewarding and thought-provoking experience for cinema enthusiasts.
                    </li><br></br>
                    In terms of fitting into the cinematic canon, it is important to note that the assessment of a film's place in the canon is subjective and can evolve over time. However, "Memoria" has the potential to be seen as a significant work within contemporary cinema due to the following reasons:
                    <li>
                        Auteur Filmmaking: Apichatpong Weerasethakul's unique directorial style and thematic explorations have earned him international recognition and critical acclaim. As "Memoria" continues his artistic journey, it contributes to the ongoing legacy of Weerasethakul's body of work and adds to the discourse around auteur filmmaking.
                    </li>
                    <li>
                        Artistic Exploration: "Memoria" tackles philosophical and existential questions, delving into the human experience through the lens of memory. Its exploration of themes aligns with a long tradition of art cinema, which values introspection, ambiguity, and open-ended narratives. By engaging with these themes, "Memoria" adds to the broader artistic conversation within the cinematic canon.
                    </li>
                    <li>
                        Cultural Representation: As a film from Thailand, "Memoria" represents a unique perspective within the global cinematic landscape. It showcases the rich cultural heritage and storytelling traditions of Thai cinema while also offering insights into universal themes that resonate with a global audience. Its inclusion in the cinematic canon can contribute to a more diverse and inclusive representation of world cinema.
                    </li><br></br>
                    It's worth mentioning that the perception and evaluation of a film can vary among critics, scholars, and audiences. As "Memoria" continues to be discussed and analyzed, its place within the cinematic canon may become more defined and solidified.
                    </p>
                </div>
            </div>
        </div>
    );
};
