import React from 'react';
import profile1 from '../../../Image/profile1.jpg';
import profile2 from '../../../Image/profile2.jpg';
import profile3 from '../../../Image/profile3.jpg';
import Teaminfo from '../TeamInfo/Teaminfo';
const Team = () => {
    const teamData = [
        {
            id: 1,
            name: 'Michael Gare ',
            image: profile1,
            depeloper: 'React Js Depeloper',
        },
        {
            id: 2,
            name: 'Jhon Due ',
            image: profile2,
            depeloper: 'PHP Depeloper',
        },
        {
            id: 3,
            name: 'Recherd Jhon ',
            image: profile3,
            depeloper: 'Python Depeloper',
        },

    ]
    return (

        <section id="team" class="pb-5">
            <div class="container">
                <h2 className="text-center card py-2 section-title">Meet Our Team</h2>
                <div class="row">
                    {
                        teamData.map(team => <Teaminfo
                            key={team.id}
                            team={team}
                        ></Teaminfo>)
                    }
                </div>
            </div>


        </section>

    );
};

export default Team;