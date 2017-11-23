import { spaceman, telescope, rocket, twinkle, halfmoon, ufo } from '../images/icon/index';

const profile = {
    title: 'Profile',
    text: `My current role is a full-stack software engineer working primarily in the front end. 
        But day to day my skills in design, hardware, 3D printing and video editing come in handy for making rapid prototypes; 
        helpful for igniting the imaginations of the stakeholders and clients who visit. 
        I am a maker at heart who is happiest covered head to toe in glitter, paint and LEDS. 
        I am passionate about technology and reaching out to the next generation of women in Tech, 
        I’ve written some blogs about my experiences so far that you can read here, here and here. `,
    icon: spaceman,
    isListing: false,
    fullSize: true
};

const experience = {
    title: 'Experience',
    text: [
        {
            role: 'Software Engineer',
            location: 'The Dock, Accenture',
            dates: '2016 - Current',
            description: `This role requires me to be multidisciplinary in my skillset, knowledgeable about new technologies and 
                highly collaborative. The Dock is an innovation research and development centre for an entire global business.`
        },
        {
            role: 'Coder Dojo Mentor',
            location: 'Coder Dojo Foundation',
            dates: '2016 - Current',
            description: `I set up the Robotics module for the Silicon Docks Dojo and two of my ninjas are finalists in the Digital Girl of the Year Award. 
                I’ve learnt a lot during my time teaching at the Dojo.`
        }
    ],
    icon: rocket,
    isListing: true,
    fullSize: true
};

const education = {
    title: 'Education',
    text: [
        {
            role: 'MSc. Interactive Digital Media',
            location: 'School of Computer Science and Statistics, Trinity College Dublin',
            dates: '2014 - 2015',
        },
        {
            role: 'BA(Hons) Fine Art and Art History',
            location: 'School of Art, Design and Architecture, Kingston University, UK',
            dates: '2011 - 2014',
        }
    ],
    icon: telescope,
    isListing: true,
    fullSize: true
};

export const skillsObject = {
    title: "Development",
    icon: twinkle,
    skills: [
        {
            label: 'JavaScript',
            value: 75
        },
        {
            label: 'React',
            value: 75
        },
        {
            label: 'Angular 2+',
            value: 60
        },
        {
            label: 'ECMAScript',
            value: 70
        },
        {
            label: 'TypeScript',
            value: 75
        },
        {
            label: 'Python',
            value: 60
        },
        {
            label: 'Voice UI',
            value: 50
        },
        {
            label: 'HTML5',
            value: 100
        },
        {
            label: 'CSS/SCSS',
            value: 80
        },
        {
            label: 'Bootstrap',
            value: 90
        }
    ],
    fullSize: false
};

export const designObject = {
    title: 'Design',
    icon: halfmoon,
    skills: [
        'Sketch', 'Illustrator', 'Premiere Pro', 'Final Cut', 'Photoshop', '3D Modelling',
        'Web Design', 'User Experience Design', 'User Interface Design', 'Voice Interface Design',
        'Hand Lettering'
    ],
    fullSize: false
};

export const otherObject = {
    title: 'Other things I know about',
    icon: ufo,
    skills: [
        'Agile and Scrum Methodologies', 'Critical Thinking', 'Problem Solving', 'Excellent Writing Skills', 'Design Thinking',
        'Raspberry Pi', 'Arduino', 'Adafruit', 'Sensor Technologies', 'IOT', '3D Printing', 'TCP/IP Networks', 'Fine Art'
    ],
    fullSize: false
};

export const sectionsArray = [profile, experience, education];