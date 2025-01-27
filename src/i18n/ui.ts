export const languageList = {
  es: 'Español',
  en: 'English'
}

export const labels = {
  es: {
    hero: {
      fullName: 'Sergio Aguado Garrido',
      description:
        'Desarrollador Frontend impulsado por diseñar y desarrollar experiencias digitales innovadoras y de alta calidad.'
    },
    experience: {
      title: 'Experiencia',
      cards: [
        {
          startDate: 'Abril 2024',
          endDate: 'Junio 2024',
          title: 'Frontend Developer',
          location: 'Madrid, España',
          company: 'Kairós DS',
          description:
            'Creación de WebComponents reutilizables utilizando JavaScript y Lit, implementando patrones de diseño BLoC para asegurar una arquitectura robusta y mantenible.',
          skills: [
            'JavaScript',
            'Lit',
            'WebComponents',
            'BLoC',
            'Jest',
            'Cypress',
            'Git',
            'Docker'
          ],
          imageName: 'kairosds',
          link: 'https://www.kairosds.com/'
        },
        {
          startDate: 'Septiembre 2022',
          endDate: 'Junio 2024',
          title: 'Desarrollo de Aplicaciones Web',
          location: 'Toledo, España',
          company: 'IES Azarquiel',
          description:
            'Estudié el grado superior de Desarrollo de Aplicaciones Web en el IES Azarquiel en Toledo, donde aprendí a desarrollar aplicaciones web full stack.',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Java',
            'SpringBoot',
            'SQL',
            'PL/SQL',
            'AWS'
          ],
          imageName: 'iesazarquiel',
          link: 'http://www.ies-azarquiel.es/'
        }
      ]
    },
    projects: {
      title: 'Poyectos',
      cards: [
        {
          title: 'Sistema de inspección de neumáticos',
          description:
            'Aplicación web que permite a los usuarios subir imágenes de neumáticos para ser inspeccionados por un modelo de Machine Learning propio.',
          link: '/projects/sistema-de-inspección-de-neumáticos.webm',
          github: '',
          image: '/projects/sistema-de-inspección-de-neumáticos.webp',
          skills: [
            'Python',
            'TensorFlow',
            'Keras',
            'Flask',
            'Astro',
            'React',
            'Tailwind CSS'
          ]
        },
        {
          title: 'Disney+ Clone',
          description:
            'Clon de la interfaz gráfica de la plataforma Disney+ hecho con React y Tailwind CSS. Incluye sistema de búsqueda con TMDb API con la que se obtiene los datos e imagenes de las películas.',
          link: 'https://disney-clone-saguadodev.vercel.app/',
          github: 'https://github.com/saguadodev/disney-clone',
          image: '/projects/disney-clone.webp',
          skills: ['React', 'Tailwind CSS']
        }
      ],
      link: 'Ver todos los proyectos'
    },
    allProjects: {
      title: 'Proyectos',
      description:
        'Aquí se encuentran todos los proyectos en los que he trabajado a lo largo de mi trayectoria como desarrollador.',
      cards: [
        {
          title: 'Sistema de inspección de neumáticos',
          description:
            'Aplicación web que permite a los usuarios subir imágenes de neumáticos para ser inspeccionados por un modelo de Machine Learning propio.',
          link: '/projects/sistema-de-inspección-de-neumáticos.webm',
          github: '',
          image: '/projects/sistema-de-inspección-de-neumáticos.webp',
          skills: [
            'Python',
            'TensorFlow',
            'Keras',
            'Flask',
            'Astro',
            'React',
            'Tailwind CSS'
          ]
        },
        {
          title: 'Disney+ Clone',
          description:
            'Clon de la interfaz gráfica de la plataforma Disney+ hecho con React y Tailwind CSS. Incluye sistema de búsqueda con TMDb API con la que se obtiene los datos e imagenes de las películas.',
          link: 'https://disney-clone-saguadodev.vercel.app/',
          github: 'https://github.com/saguadodev/disney-clone',
          image: '/projects/disney-clone.webp',
          skills: ['React', 'Tailwind CSS']
        },
        {
          title: 'Spotify Astro',
          description:
            'Clon del reproductor de música Spotify con Astro, React, Svelte y Tailwind CSS. Animaciones, reproducción de canciones, listas de reproducción y control del nivel de volumen.',
          link: 'https://spotify-astro-saguadodev.vercel.app/',
          github: 'https://github.com/saguadodev/spotify-astro',
          image: '/projects/spotify-astro.webp',
          skills: ['Astro', 'React', 'Svelte', 'TypeScript', 'Tailwind CSS']
        },
        {
          title: 'World Data',
          description:
            'Aplicación web para ver todos los países del mundo, con su respectiva bandera, nombre, capital, lenguajes y población. Se puede buscar, filtrar y ver una serie de gráficos.',
          link: 'https://saguadodev.github.io/WorldData/',
          github: 'https://github.com/saguadodev/WorldData',
          image: '/projects/world-countries-data.webp',
          skills: ['HTML', 'CSS', 'JavaScript']
        },
        {
          title: 'Fridge',
          description:
            'Proyecto personal para gestionar los alimentos, puedes añadir alimentos con su nombre, foto, fecha de caducidad y categoría. De esta forma podrás saber qué alimentos tienes en tu nevera y cuándo caducan.',
          link: 'https://saguadodev.github.io/fridge/',
          github: 'https://github.com/saguadodev/fridge',
          image: '/projects/fridge.webp',
          skills: ['HTML', 'CSS', 'JavaScript']
        },
        {
          title: 'Netflix Logic',
          description:
            'Este proyecto simula una plataforma tipo Netflix, gestionando películas y series. También se gestionan promociones según el medio, junto a campañas de marketing y subveniones del ayuntamiento.',
          link: 'https://github.com/saguadodev/NetflixLogic',
          github: 'https://github.com/saguadodev/NetflixLogic',
          image: '/projects/Netflix.webp',
          skills: ['Java']
        }
      ],
      link: 'Sergio Aguado'
    }
  },

  en: {
    hero: {
      fullName: 'Sergio Aguado Garrido',
      description:
        'Frontend Developer driven by designing and developing innovative and high quality digital experiences.'
    },
    experience: {
      title: 'Experience',
      cards: [
        {
          startDate: 'April 2024',
          endDate: 'June 2024',
          title: 'Frontend Developer',
          location: 'Madrid, Spain',
          company: 'Kairós DS',
          description:
            'Creation of reusable WebComponents using JavaScript and Lit, implementing BLoC design patterns to ensure a robust and maintainable architecture.',
          skills: [
            'JavaScript',
            'Lit',
            'WebComponents',
            'BLoC',
            'Jest',
            'Cypress',
            'Git',
            'Docker'
          ],
          imageName: 'kairosds',
          link: 'https://www.kairosds.com/'
        },
        {
          startDate: 'September 2022',
          endDate: 'June 2024',
          title: 'Web Applications Development',
          location: 'Toledo, Spain',
          company: 'IES Azarquiel',
          description:
            'I studied the higher degree of Web Applications Development at IES Azarquiel in Toledo, where I learned to develop full stack web applications.',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Java',
            'SpringBoot',
            'SQL',
            'PL/SQL',
            'AWS'
          ],
          imageName: 'iesazarquiel',
          link: 'http://www.ies-azarquiel.es/'
        }
      ]
    },
    projects: {
      title: 'Projects',
      cards: [
        {
          title: 'Tire Inspection System',
          description:
            'Web application that allows users to upload tire images to be inspected by a proprietary Machine Learning model.',
          link: '/projects/sistema-de-inspección-de-neumáticos.webm',
          github: '',
          image: '/projects/sistema-de-inspección-de-neumáticos.webp',
          skills: [
            'Python',
            'TensorFlow',
            'Keras',
            'Flask',
            'Astro',
            'React',
            'Tailwind CSS'
          ]
        },
        {
          title: 'Disney+ Clone',
          description:
            'Disney+ platform graphical interface clone made with React and Tailwind CSS. It includes a search system with TMDb API that retrieves movie data and images.',
          link: 'https://disney-clone-saguadodev.vercel.app/',
          github: 'https://github.com/saguadodev/disney-clone',
          image: '/projects/disney-clone.webp',
          skills: ['React', 'Tailwind CSS']
        }
      ],
      link: 'View all projects'
    },
    allProjects: {
      title: 'Projects',
      description:
        'Here are all the projects I have worked on throughout my career as a developer.',
      cards: [
        {
          title: 'Tire Inspection System',
          description:
            'Web application that allows users to upload tire images to be inspected by a proprietary Machine Learning model.',
          link: '/projects/sistema-de-inspección-de-neumáticos.webm',
          github: '',
          image: '/projects/sistema-de-inspección-de-neumáticos.webp',
          skills: [
            'Python',
            'TensorFlow',
            'Keras',
            'Flask',
            'Astro',
            'React',
            'Tailwind CSS'
          ]
        },
        {
          title: 'Disney+ Clone',
          description:
            'Disney+ platform graphical interface clone made with React and Tailwind CSS. It includes a search system with TMDb API that retrieves movie data and images.',
          link: 'https://disney-clone-saguadodev.vercel.app/',
          github: 'https://github.com/saguadodev/disney-clone',
          image: '/projects/disney-clone.webp',
          skills: ['React', 'Tailwind CSS']
        },
        {
          title: 'Spotify Astro',
          description:
            'Spotify music player clone with Astro, React, Svelte and Tailwind CSS. Animations, song playback, playlists and volume level control.',
          link: 'https://spotify-astro-saguadodev.vercel.app/',
          github: 'https://github.com/saguadodev/spotify-astro',
          image: '/projects/spotify-astro.webp',
          skills: ['Astro', 'React', 'Svelte', 'TypeScript', 'Tailwind CSS']
        },
        {
          title: 'World Data',
          description:
            'Web application to view all the countries in the world, with their respective flag, name, capital, languages and population. You can search, filter and view a series of graphs.',
          link: 'https://saguadodev.github.io/WorldData/',
          github: 'https://github.com/saguadodev/WorldData',
          image: '/projects/world-countries-data.webp',
          skills: ['HTML', 'CSS', 'JavaScript']
        },
        {
          title: 'Fridge',
          description:
            'Personal project to manage food, you can add food with its name, photo, expiration date and category. This way you will know what food you have in your fridge and when it expires.',
          link: 'https://saguadodev.github.io/fridge/',
          github: 'https://github.com/saguadodev/fridge',
          image: '/projects/fridge.webp',
          skills: ['HTML', 'CSS', 'JavaScript']
        },
        {
          title: 'Netflix Logic',
          description:
            'This project simulates a Netflix-type platform, managing movies and series. It also manages promotions according to the medium, along with marketing campaigns and city council grants.',
          link: 'https://github.com/saguadodev/NetflixLogic',
          github: 'https://github.com/saguadodev/NetflixLogic',
          image: '/projects/Netflix.webp',
          skills: ['Java']
        }
      ],
      link: 'Sergio Aguado'
    }
  }
}
