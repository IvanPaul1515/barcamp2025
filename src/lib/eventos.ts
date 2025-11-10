// src/lib/eventos.ts
export interface Evento {
    horario: string;
    actividad: string;
    ponente: string;
    etiquetas?: string[];
    detalles?: string;
    lugar: string;
}

export const eventos: Evento[] = [
    {
        horario: "8:00 - 9:00",
        actividad: "Registro",
        ponente: "Equipo Barcamp",
        etiquetas: ["Barcamp RD","12 años","CICC"],
        detalles: "Registro del Barcamp RD 2025",
        lugar: "Teatro",
    },
    {
        horario: "9:00 - 9:30",
        actividad: "Bienvenida",
        ponente: "Comite CICC",
        etiquetas: ["apertura"],
        detalles: "Bienvenida al Evento Barcamp RD 2025",
        lugar: "Teatro",
    },
    {
        horario: "9:30 - 10:30",
        actividad: "Keynote",
        ponente: "Pedro Sanders",
        etiquetas: ["Keynote","Voice AI",],
        detalles: "19 años de lecciones: De programar en zonas de combate a dominar Voice AI",
        lugar: "Teatro",
    },

    // 10:30 - 11:30
    {
        horario: "10:30 - 11:30",
        actividad: "Apps Offline First con Flutter y Arquitectura Moderna - Patrones prácticos para un mundo sin conexión",
        ponente: "Pedro de la Cruz",
        etiquetas: ["Flutter", "offline","IA"],
        detalles: "En un mundo donde la conectividad no siempre está garantizada, diseñar aplicaciones que funcionen sin internet ya no es opcional, es una necesidad.En esta charla exploraremos cómo construir apps resilientes con Flutter aplicando el enfoque Offline First. Veremos cómo integrar bases de datos locales, sincronización con la nube y patrones de arquitectura moderna, asegurando aplicaciones escalables, robustas y fáciles de mantener.",
        lugar: "Sala #1, Padre Arroyo",
    },
    {
        horario: "10:30 - 11:30",
        actividad: "Arquitecturas de Data Center para la Próxima Década",
        ponente: "Fidel Jeldes",
        etiquetas: ["Infraestructura", "DataCenter","Arquitectura"],
        detalles: "Estamos en un momento decisivo. La revolución digital avanza a una velocidad imparable, impulsada por la inteligencia artificial, el IoT y la realidad virtual. Detrás de cada clic, de cada conexión y de cada innovación, se encuentra una infraestructura invisible pero poderosa: el data center. Pero los data centers que conocemos ya no son suficientes. El futuro exige más: más velocidad, más eficiencia y más sostenibilidad. Estamos aquí para mirar hacia adelante, para ir más allá de lo que se ha hecho y para diseñar los cimientos de la próxima era tecnológica.Esta charla no es solo sobre servidores y cables; es sobre el poder que ustedes, como futuros ingenieros y líderes tecnológicos, tienen para moldear el mundo. Hablaremos de arquitecturas escalables, de la eficiencia energética que el planeta necesita, y de las tecnologías que harán posible lo inimaginable. ",
        lugar: "Sala #2, Padre Arroyo",
    },
    {
        horario: "10:30 - 11:30",
        actividad: "Ingenieria de Datos con Apache Airflow",
        ponente: "Jose Manuel Martínez",
        etiquetas: ["Python", "Airflow","Apache","Data"],
        detalles: "Apache Airflow es una herramienta de código abierto (Open Source) de ingeniería de datos que para desarrollar, agendar, monitorear y orquestar de data pipelines o workflows orientado lotes de datos. Es una herramienta de clase mundial basada en Python que nos permite crear y mantener ETLs con mucha facilidad y un curva suave de aprendizaje. Esta desconferencia es una introducción práctica a Apache Airflow donde se explicará su arquitectura, se mostrará cómo comenzar a desarrollar Workflows y tareas dentro de un proyecto de Airflow, diferentes opciones para desplegarlo, casos de uso con ejemplos prácticos de un entorno de trabajo, alternativas a Airflow y una introducción a los conceptos básicos de la ingeniería de datos.",
        lugar: "Sala #3, Padre Arroyo",
    },
    {
        horario: "10:30 - 11:30",
        actividad: "DevSecOps Cloud Survival: Break Your Cloud Before They Do",
        ponente: "Karla Aquino ",
        etiquetas: ["Devsecops", "Cloud","IT Operations"],
        detalles: "La adopción de la nube y DevOps ha transformado la forma en que desarrollamos y desplegamos aplicaciones, pero también ha abierto un nuevo frente de riesgos. DevSecOps Cloud Survival: Break Your Cloud Before They Do explora cómo la seguridad debe convertirse en la primera vertical en cualquier estrategia cloud.\n" +
            "\n" +
            "En esta sesión revisaremos los errores más frecuentes que atacantes aprovechan: IaC mal configurado, pipelines CI/CD inseguros, secretos y tokens expuestos, y ausencia de controles Zero Trust. A través de ejemplos reales y un enfoque ofensivo, mostraremos cómo estos fallos se convierten en brechas graves y qué controles simples puedes aplicar para evitarlos.\n" +
            "\n" +
            "El objetivo es claro: que salgas con un survival kit práctico para blindar tu pipeline y tu nube, entendiendo que en un mundo automatizado, el verdadero firewall es tu DevSecOps.",
        lugar: "Sala #4, Padre Arroyo",
    },

    // 11:30 - 12:30
    {
        horario: "11:30 - 12:30",
        actividad: "De paros a decisiones: OEE en tiempo real con Linealyze",
        ponente: "Mario Victoria",
        etiquetas: ["Datos", "Analytics"],
        detalles:"En la mayoría de industrias manufactureras, la información de producción y paros queda atrapada en hojas de cálculo o tableros manuales, lo que retrasa la toma de decisiones. En esta charla mostraré cómo, con Linealyze (MES SaaS), es posible pasar de registrar eventos aislados a tener OEE y KPIs en tiempo real.\n" +
            "Partiremos desde la conexión de equipos vía OPC-UA/MQTT, la captura de eventos de producción y paradas, y la visualización inmediata en dashboards accesibles desde la nube. Revisaremos buenas prácticas para integrar IT/OT de forma segura con gateways en Docker, y estrategias para escalar de un piloto a una planta completa.\n",
        lugar: "Sala #1, Padre Arroyo",
    },
    {
        horario: "11:30 - 12:30",
        actividad: "RETRO GAME DEVELOPMENT 2.0",
        ponente: "Karvin Jiménez ",
        etiquetas: ["games", "retro","develompment","C++"],
        detalles:"Si alguna vez tuviste el deseo de aprender a programar videojuegos para una de tus consolas retro favoritas. Ven y únete a esta charla y aprende a desarrollar videojuegos retro de una vez por todas. En nuestra charla abordaremos distintas herramientas disponibles para desarrollar videojuegos, también como instalar dichas herramientas, ejecutar ejemplos prácticos y una guía paso a paso sobre cómo ir de una ventana vacía hasta tener nuestro primer juego.",
        lugar: "Sala #2, Padre Arroyo",
    },
    {
        horario: "11:30 - 12:30",
        actividad: "Connected Minds: Exploring Possibilities with Microsoft Graph API",
        ponente: "Felix Valerio",
        etiquetas: ["api", "graph","Business Logic"],
        detalles:"En el mundo actual, impulsado por la nube, los desarrolladores que desean innovar y crear aplicaciones significativas deben comprender el poder de los datos conectados y las API inteligentes. La API de Microsoft Graph es un punto de conexión uniforme que conecta varios servicios en la nube de Microsoft, proporcionando una gran cantidad de datos y funcionalidades dentro del ecosistema de Azure.\n" +
            "\n" +
            "En esta presentación, titulada «Mentes Conectadas: Explorando las Posibilidades con la API de Microsoft Graph», aprenderá cómo la API de Microsoft Graph permite a los desarrolladores crear soluciones más inteligentes e integradas que conectan sin problemas a personas, procesos y sistemas.\n" +
            "\n" +
            "Comenzaremos explicando qué es la API de Microsoft Graph y su importante papel en Azure. Aprenderá cómo puede acceder a datos organizacionales enriquecidos —desde usuarios y grupos hasta dispositivos y análisis— y proporcionar información valiosa.",
        lugar: "Sala #3, Padre Arroyo",
    },
    {
        horario: "11:30 - 12:30",
        actividad: "De Datos a Decisiones Inteligentes: Integrando AI y Power BI en Escenarios Reales",
        ponente: "Rafael Dorville Collado",
        etiquetas: ["BI", "AI","Azure","Python"],
        detalles:"En esta charla teórico–práctica exploraremos cómo combinar Inteligencia Artificial con análisis de datos en Power BI para transformar información cruda en decisiones inteligentes.\n" +
            "\n" +
            "Se presentará cómo integrar servicios de AI, tal como Azure OpenAI y Azure Cognitive Services e integrarlos directamente en flujos de trabajo de Power BI para enriquecer dashboards con análisis predictivo, generación automática de insights y segmentaciones inteligentes.\n" +
            "\n" +
            "La sesión incluirá casos aplicados en entornos empresariales reales y una demostración paso a paso que permitirá a los asistentes visualizar el potencial de estas herramientas sin requerir conocimientos avanzados de ciencia de datos. El enfoque está diseñado para que estudiantes, profesionales de TI y analistas comprendan de manera clara cómo dar el salto de reportes tradicionales a soluciones de analítica aumentada.",
        lugar: "Sala #4, Padre Arroyo",
    },

    // Almuerzo
    {
        horario: "12:30 - 13:00",
        actividad: "Almuerzo",
        etiquetas: ["Almuerzo", "Barcamp"],
        detalles: "Un almuerzo para compartir ideas y experiencias entre los asistentes del Barcamp",
        lugar: "TBA",
        ponente: ""
    },

    // 14:00 - 15:00
    {
        horario: "14:00 - 15:00",
        actividad: "De jefes a líderes: el cambio cultural que las empresas necesitan ",
        ponente: "Kelvyn de la Cruz",
        etiquetas: ["liderazgo","Innovacion","Gestion de personas"],
        detalles:"¿Qué diferencia a un jefe de un verdadero líder? En esta desconferencia exploraremos cómo transformar la cultura empresarial desde el control hacia la inspiración. Descubre por qué el liderazgo humano es hoy la clave para retener talento, impulsar innovación y generar resultados sostenibles. Si buscas crecer como líder o entender cómo potenciar tu equipo, esta es la charla que no querrás perderte.",
        lugar: "Sala #1, Padre Arroyo",
    },
    {
        horario: "14:00 - 15:00",
        actividad: "Deploy sin dramas: el arte de no romper producción",
        ponente: "Inés Montero Concepción",
        etiquetas: ["devops", "deploy","Performance"],
        detalles:"Con esta charla aprenderás cómo reducir el drama de pasar a producción con una mezcla de buenas prácticas, herramientas y hacks que realmente funcionan. Compartiré mis experiencias reales —desde e-commerce hasta banca— sobre lo que aprendí cuando los despliegues salieron mal (y cómo evitar repetir la historia). Veremos patrones simples, estrategias de rollback, chequeos previos y cultura de equipo para que tus releases sean más predecibles y menos traumáticos.\n" +
            "\n" +
            "El objetivo es que salgas con un kit de supervivencia para deploys, capaz de ahorrarte madrugadas, pizzas de emergencia y largas charlas en el equipo.",
        lugar: "Sala #2, Padre Arroyo",
    },
    {
        horario: "14:00 - 15:00",
        actividad: "Gestión de Servicios de TI para No-Técnicos: Lo que Nadie Te Explica",
        ponente: "Jonathan Morales Baez",
        etiquetas: ["IT", "servicios"],
        detalles:"La Gestión de Servicios de TI suele percibirse como un tema complejo y reservado para especialistas, pero la realidad es que su impacto va mucho más allá del área técnica. Cada proceso, desde la atención de un incidente hasta la continuidad del negocio, influye directamente en la productividad, la eficiencia y la experiencia de los usuarios en toda la organización.\n" +
            "\n" +
            "En esta charla descubrirás, de manera clara y sin tecnicismos, cómo funciona realmente la Gestión de Servicios de TI, por qué es clave para cualquier área de la empresa y qué conceptos prácticos todos deberían comprender para sacar mayor provecho de la tecnología. El objetivo es que salgas con una visión fresca y herramientas simples para transformar la relación entre personas y tecnología en tu día a día.\n" +
            "\n" +
            "5 Razones para asistir - Entenderás lo esencial de ITSM sin tecnicismos. Explicado de manera sencilla y práctica. - Descubrirás cómo TI impacta en todas las áreas. No es un tema de “los de sistemas”, es de todos. - Aprenderás a identificar valor en los servicios de TI. Más allá de costos, centrado en resultados. - Conocerás ejemplos reales y aplicables. Situaciones que viven las empresas todos los días. - Obtendrás claves para colaborar mejor con TI. Lo que nadie te explica, pero que cambia la forma de trabajar.",
        lugar: "Sala #3, Padre Arroyo",
    },
    {
        horario: "14:00 - 15:00",
        actividad: "WasmVerse: Interoperabilidad entre lenguajes",
        ponente: "Dominiguel Rodriguez",
        etiquetas: ["wasm", "web"],
        detalles:"¿Sabe cuál es el principal desafío en el desarrollo de software moderno? Hacer que sistemas construidos con diferentes lenguajes trabajen juntos.\n" +
            "\n" +
            "Para lograr esta interoperabilidad, usamos cuatro grandes estrategias:\n" +
            "\n" +
            "Plataformas Compartidas (como .NET o la JVM): Donde lenguajes distintos se compilan a un bytecode común, ¡permitiendo que C# y F# se hablen directamente!\n" +
            "\n" +
            "WebAssembly (WASM): El estándar más nuevo. Permite compilar cualquier lenguaje (Rust, C++) a un formato binario ultrarrápido que se ejecuta en el navegador o en el servidor, creando un puente de rendimiento.\n",
        lugar: "Sala #4, Padre Arroyo",
    },

    // 15:00 - 16:00
    {
        horario: "15:00 - 16:00",
        actividad: "Migrating A 100-Million Dollar Fintech Company from React Native to Flutter",
        ponente: "Ivan Ubinas",
        etiquetas: ["IA", "Cursor", "flutter"],
        detalles:"Cómo y por qué migramos una aplicación móvil de una empresa Fintech de 100 millones de dólares de React Native a Flutter en tan solo unas semanas utilizando IA.",
        lugar: "Sala #1, Padre Arroyo",
    },
    {
        horario: "15:00 - 16:00",
        actividad: "Arquitectura de Software Cloud en el Mundo Real: Más allá de los diagramas",
        ponente: "Ayesha Yege",
        etiquetas: ["arquitectura", "cloud"],
        detalles:"a arquitectura de software va mucho más allá de dibujar diagramas: es el arte de tomar decisiones que impactan la escalabilidad, la seguridad, los costos y la vida diaria de los equipos. En esta charla exploraremos patrones reales (monolitos, microservicios, hexagonal, event-driven), los errores más comunes y cómo enfrentarlos sin caer en modas pasajeras.\n" +
            "\n" +
            "Si alguna vez te has preguntado: ¿por qué mi sistema funciona en desarrollo pero explota en producción? o ¿cómo sé cuándo migrar a microservicios?, aquí encontrarás respuestas prácticas y aprendizajes de la vida real.\n" +
            "\n" +
            "Saldrás con herramientas y principios para diseñar sistemas que evolucionen con el tiempo, sin morir en el intento.",
        lugar: "Sala #2, Padre Arroyo",
    },
    {
        horario: "15:00 - 16:00",
        actividad:
            "Ten things we've learned from running production infrastructure at Google ",
        ponente: "Oscar J Rodriguez",
        etiquetas: ["google"],
        detalles:"Esta presentación comparte diez lecciones aprendidas al administrar la infraestructura de producción de Google.\n" +
            "\n" +
            "Aborda temas como confiabilidad, estandarización, eliminación de culpas y automatización.\n" +
            "\n" +
            "La charla enfatiza la importancia de medir lo que importa y de adaptarse al cambio.\n" +
            "\n" +
            "Destaca que las interrupciones son inevitables y que la simplicidad es clave en el diseño de sistemas.\n" +
            "\n" +
            "La presentación ofrece ideas para mejorar la infraestructura de producción y la colaboración en equipo.",
        lugar: "Sala #3, Padre Arroyo",
    },
    {
        horario: "15:00 - 16:00",
        actividad: "Pruebas de integración para servicios REST usando Rest Assured",
        ponente: "Eudris Cabrera",
        etiquetas: ["Java", "api", "rest"],
        detalles:"Esta es una actualización de una charla que habíamos realizados anteriormente donde mostramos como realizar pruebas integrales para los servicios REST utilizando Assured, una librería Java para la validación de servicios REST.\n" +
            "\n" +
            "Estaremos viendo como ha evolucionado la librería Rest Assured y explorar las más recientes novedades. Adicional a lo anterior mostraremos como podemos crear pruebas de integración automatizadas y consistentes tanto para ambientes locales como para pipelines en ambiente de CI/CD.",
        lugar: "Sala #4, Padre Arroyo",
    },

    // 16:00 - 17:00
    {
        horario: "16:00 - 17:00",
        actividad: "Iniciar una startup tecnológica: la realidad",
        ponente: "Emmanuel Peña",
        etiquetas: ["startups", "emprendimiento","Transformacion"],
        detalles:"Cuando pensamos en startups tecnológicas, la narrativa suele estar dominada por los unicornios y las grandes corporaciones que transformaron industrias enteras. Sin embargo, la realidad es que la mayoría de los emprendimientos no llegan a ser el próximo Amazon, Apple o Google. Y eso no significa fracaso.\n" +
            "\n" +
            "En esta charla quiero compartir un roadmap claro y realista para quienes sueñan con emprender en tecnología:\n" +
            "- Cómo definir un propósito sólido que dé sentido a la idea.\n" +
            "- La importancia de diseñar una estrategia viable más allá de la inspiración inicial.\n" +
            "- Las claves para una ejecución estructurada que permita crecer de manera sostenible.\n" +
            "\n" +
            "Mi objetivo es desmitificar el camino del unicornio y demostrar que el éxito también está en la solidez, la buena estructura y la innovación práctica. Esta charla está dirigida a estudiantes, futuros emprendedores y curiosos de la tecnología que quieran entender cómo se construye una startup que realmente genera impacto.\n" +
            "\n" +
            "Al final, no se trata de perseguir un mito, sino de crear empresas con propósito, innovación y capacidad de transformar realidades.",
        lugar: "Sala #1, Padre Arroyo",
    },
    {
        horario: "16:00 - 17:00",
        actividad: "WebMob: Your Web-Powered Robotic Companion",
        ponente: "Ivan R Artiles Bretón",
        etiquetas: ["robotics", "web","eductaion","javascript"],
        detalles:"Imagina un robot que no necesita una aplicación nativa ni software propietario; solo un navegador. Ese es WebMob: un robot impreso en 3D con Arduino, cuya \"cara\" e interacciones se controlan mediante una aplicación web. Pero WebMob no es solo un gadget divertido, sino el inicio de un ecosistema de aplicaciones web diseñadas para interactuar con el robot y ampliar sus posibilidades en el mundo real. En esta charla, compartiré cómo WebMob está evolucionando desde una versión moderna de MobBob hasta convertirse en un compañero versátil que puede: - Facilitar el estudio mediante cuestionarios interactivos y módulos educativos. - Apoyar las rutinas laborales con recordatorios, temporizadores e incluso pausas lúdicas. - Integrarse en la vida diaria, expresando emociones, reaccionando a las interacciones y aportando personalidad a las tareas cotidianas. - Demostrar la robótica expresiva, utilizando animaciones oculares y movimientos motores para comunicar sentimientos.\n" +
            "\n" +
            "Para los desarrolladores, WebMob también es una plataforma: cada módulo es una aplicación web, lo que significa que cualquiera puede crear, compartir e integrar nuevas experiencias —desde juegos hasta herramientas de productividad— que se ejecutan sin problemas en el navegador y están conectadas al robot físico.",
        lugar: "Sala #2, Padre Arroyo",
    },
    {
        horario: "16:00 - 17:00",
        actividad:
            "Sin cultura de datos no hay transformacion digital",
        ponente: "Emmanuel de la Rosa",
        etiquetas: ["datos", "transformacion","SQL","BI"],
        detalles:"Sin cultura de datos no hay transformación digital.\n" +
            "\n" +
            "La mayoría de las empresas invierte millones en tecnología: IA, automatización, nube… pero pocas preparan a su gente para usar los datos de forma efectiva. Sin personas capacitadas, la tecnología no transforma nada.\n" +
            "\n" +
            "En esta charla exploraremos cómo la cultura de datos —con confianza en la información, habilidades prácticas y hábitos de decisión— permite que la transformación digital sea real, sostenible y escalable.\n" +
            "\n" +
            "Aprenderás: - Por qué la mentalidad precede a la tecnología. - Cómo convertir datos en decisiones que generan valor. - Tres pilares esenciales de la cultura de datos: gobernanza, educación y tecnología.\n" +
            "\n" +
            "A través de casos reales y experiencias personales, mostraré cómo pequeñas decisiones y cambios de mentalidad pueden transformar procesos, equipos y resultados.",
        lugar: "Sala #3, Padre Arroyo",
    },
    {
        horario: "16:00 - 17:00",
        actividad: "A Journey From Java 17 to 25: Nine Versions, One Purpose",
        ponente: "Freddy",
        etiquetas: ["java","WebDevelopment"],
        detalles:"​Descubre el camino evolutivo de Java a través de sus versiones y cómo sigue siendo la columna vertebral de soluciones robustas y modernas. ¡Una inyección de know-how esencial para todo desarrollador!",
        lugar: "Sala #4, Padre Arroyo",
    },

    // Cierre / Panel
    {
        horario: "17:00 - 18:00",
        actividad: "Panel de cierre",
        ponente: "TBA",
        etiquetas: ["panel", "cierre"],
        detalles:"",
        lugar: "Teatro",
    },
];
