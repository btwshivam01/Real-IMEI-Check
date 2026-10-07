(() => {
    "use strict";

    const translations = { es: Object.create(null), hi: Object.create(null) };
    const add = (english, spanish, hindi) => {
        translations.es[english] = spanish;
        translations.hi[english] = hindi;
    };

    [
        ["Home", "Inicio", "होम"],
        ["IMEI Checker", "Verificador de IMEI", "IMEI जाँचकर्ता"],
        ["Privacy", "Privacidad", "गोपनीयता"],
        ["Privacy Policy", "Política de privacidad", "गोपनीयता नीति"],
        ["About Us", "Sobre nosotros", "हमारे बारे में"],
        ["About us", "Sobre nosotros", "हमारे बारे में"],
        ["About Real IMEI Check", "Acerca de Real IMEI Check", "Real IMEI Check के बारे में"],
        ["Terms and Conditions", "Términos y condiciones", "नियम और शर्तें"],
        ["Light mode", "Modo claro", "लाइट मोड"],
        ["Dark mode", "Modo oscuro", "डार्क मोड"],
        ["Color theme", "Tema de color", "रंग थीम"],
        ["Main menu", "Menú principal", "मुख्य मेनू"],
        ["Open menu", "Abrir menú", "मेनू खोलें"],
        ["Close menu", "Cerrar menú", "मेनू बंद करें"],
        ["Language", "Idioma", "भाषा"],
        ["Real IMEI Check", "Real IMEI Check", "Real IMEI Check"],
        ["© 2026 Real IMEI Check. All rights reserved.", "© 2026 Real IMEI Check. Todos los derechos reservados.", "© 2026 Real IMEI Check. सर्वाधिकार सुरक्षित।"],
        ["IMEI Format & Checksum Checker", "Verificador de formato y suma de comprobación IMEI", "IMEI प्रारूप और चेकसम जाँचकर्ता"],
        ["Check Your IMEI Number", "Comprueba tu número IMEI", "अपना IMEI नंबर जाँचें"],
        ["Enter your 15-digit IMEI number to check whether it passes the standard IMEI checksum validation.", "Introduce tu IMEI de 15 dígitos para comprobar si supera la validación estándar de la suma de comprobación.", "यह जाँचने के लिए अपना 15 अंकों का IMEI दर्ज करें कि वह मानक IMEI चेकसम सत्यापन में पास होता है या नहीं।"],
        ["Enter IMEI Number", "Introduce el número IMEI", "IMEI नंबर दर्ज करें"],
        ["Enter 15-digit IMEI", "Introduce el IMEI de 15 dígitos", "15 अंकों का IMEI दर्ज करें"],
        ["Check IMEI", "Comprobar IMEI", "IMEI जाँचें"],
        ["Enter exactly 15 digits.", "Introduce exactamente 15 dígitos.", "ठीक 15 अंक दर्ज करें।"],
        ["What is an IMEI?", "¿Qué es un IMEI?", "IMEI क्या है?"],
        ["An IMEI (International Mobile Equipment Identity) number is a unique 15-digit number associated with a mobile device. It is commonly used to identify a phone on cellular networks and can be useful when checking or managing information about your device. You can usually find your IMEI by dialing *#06# on your phone, checking the device settings, or looking at the original packaging. Our Real IMEI Check provides a quick way to verify whether an entered 15-digit IMEI passes the standard checksum validation. This can help you catch simple formatting or number-entry mistakes before using the IMEI elsewhere. Keep in mind that a valid checksum does not prove that a device is genuine, stolen or not stolen, blacklisted, unlocked, under warranty, or compatible with a particular network. The checker is designed as a simple informational tool for basic IMEI validation, without requiring complicated steps or technical knowledge.", "Un IMEI (International Mobile Equipment Identity) es un número único de 15 dígitos asociado a un dispositivo móvil. Se utiliza habitualmente para identificar un teléfono en redes celulares y puede ser útil para consultar o gestionar información del dispositivo. Normalmente puedes encontrarlo marcando *#06# en el teléfono, consultando los ajustes o mirando el embalaje original. Real IMEI Check permite verificar rápidamente si un IMEI de 15 dígitos supera la validación estándar de la suma de comprobación. Esto ayuda a detectar errores sencillos de formato o al introducir el número. Ten en cuenta que una suma de comprobación válida no demuestra que el dispositivo sea auténtico, que no haya sido denunciado como robado, que no esté en una lista negra, que esté desbloqueado, en garantía o que sea compatible con una red concreta. Esta herramienta ofrece una validación básica e informativa sin pasos complicados ni conocimientos técnicos.", "IMEI (International Mobile Equipment Identity) नंबर मोबाइल डिवाइस से जुड़ा एक विशिष्ट 15 अंकों का नंबर है। इसका उपयोग आम तौर पर सेलुलर नेटवर्क पर फ़ोन की पहचान के लिए किया जाता है और यह डिवाइस की जानकारी जाँचने या प्रबंधित करने में उपयोगी हो सकता है। आप अक्सर फ़ोन पर *#06# डायल करके, डिवाइस सेटिंग्स में या मूल पैकेजिंग पर अपना IMEI पा सकते हैं। Real IMEI Check यह जल्दी जाँचने का तरीका देता है कि दर्ज किया गया 15 अंकों का IMEI मानक चेकसम सत्यापन में पास होता है या नहीं। इससे नंबर लिखने या प्रारूप की साधारण गलतियाँ पकड़ने में मदद मिलती है। ध्यान रखें कि सही चेकसम यह साबित नहीं करता कि डिवाइस असली है, चोरी की रिपोर्ट नहीं हुई है, ब्लैकलिस्ट में नहीं है, अनलॉक है, वारंटी में है या किसी विशेष नेटवर्क के अनुकूल है। यह टूल बिना जटिल चरणों या तकनीकी ज्ञान के बुनियादी IMEI सत्यापन के लिए बनाया गया है।"],
        ["15 Digits", "15 dígitos", "15 अंक"],
        ["A standard IMEI normally contains 15 digits.", "Un IMEI estándar normalmente contiene 15 dígitos.", "एक मानक IMEI में आमतौर पर 15 अंक होते हैं।"],
        ["Checksum", "Suma de comprobación", "चेकसम"],
        ["The final digit is used as a check digit.", "El último dígito se utiliza como dígito de control.", "अंतिम अंक जाँच अंक के रूप में उपयोग किया जाता है।"],
        ["Free", "Gratis", "निःशुल्क"],
        ["Check your IMEI format instantly without registration.", "Comprueba al instante el formato de tu IMEI sin registrarte.", "बिना पंजीकरण के अपने IMEI का प्रारूप तुरंत जाँचें।"],
        ["How to Find Your IMEI Number", "Cómo encontrar tu número IMEI", "अपना IMEI नंबर कैसे खोजें"],
        ["Finding your IMEI number is usually quick and does not require any special app. Here are the easiest ways to find it:", "Encontrar tu número IMEI suele ser rápido y no requiere ninguna aplicación especial. Estas son las formas más sencillas de hacerlo:", "अपना IMEI नंबर ढूँढना आमतौर पर आसान है और इसके लिए किसी विशेष ऐप की ज़रूरत नहीं होती। इसे ढूँढने के सबसे आसान तरीके ये हैं:"],
        ["1. Dial *#06#", "1. *#06# डायल करें", "1. *#06# डायल करें"],
        ["Open the Phone or Dialer app on your smartphone and enter:", "अपने स्मार्टफ़ोन में फ़ोन या डायलर ऐप खोलें और यह दर्ज करें:", "अपने स्मार्टफ़ोन में फ़ोन या डायलर ऐप खोलें और यह दर्ज करें:"],
        ["Your device should immediately display its IMEI number on the screen. If your phone supports two SIM cards, you may see two IMEI numbers.", "Tu dispositivo debería mostrar inmediatamente el número IMEI en la pantalla. Si admite dos tarjetas SIM, es posible que aparezcan dos números IMEI.", "आपके डिवाइस की स्क्रीन पर तुरंत IMEI नंबर दिखाई देना चाहिए। यदि आपका फ़ोन दो SIM कार्ड का समर्थन करता है, तो आपको दो IMEI नंबर दिख सकते हैं।"],
        ["2. Check Your Phone Settings", "2. Consulta los ajustes del teléfono", "2. फ़ोन की सेटिंग्स देखें"],
        ["You can also find the IMEI through your device settings.", "También puedes encontrar el IMEI en los ajustes del dispositivo.", "आप अपने डिवाइस की सेटिंग्स में भी IMEI ढूँढ सकते हैं।"],
        ["Android: Go to Settings → About Phone → IMEI. The exact menu name may vary depending on your phone manufacturer.", "Android: Ve a Ajustes → Acerca del teléfono → IMEI. El nombre exacto del menú puede variar según el fabricante.", "Android: सेटिंग्स → फ़ोन के बारे में → IMEI पर जाएँ। फ़ोन निर्माता के अनुसार मेनू का नाम अलग हो सकता है।"],
        ["iPhone: Go to Settings → General → About → IMEI.", "iPhone: Ajustes → General → Información → IMEI पर जाएँ।", "iPhone: सेटिंग्स → सामान्य → परिचय → IMEI पर जाएँ।"],
        ["3. Check the Original Box", "3. मूल बॉक्स देखें", "3. मूल बॉक्स देखें"],
        ["If you no longer have access to your phone, check the original device packaging. The IMEI is often printed on a label along with other device information.", "Si ya no tienes acceso al teléfono, revisa el embalaje original. El IMEI suele aparecer en una etiqueta junto con otros datos del dispositivo.", "यदि आपके पास फ़ोन उपलब्ध नहीं है, तो उसकी मूल पैकेजिंग देखें। IMEI अक्सर अन्य डिवाइस जानकारी के साथ एक लेबल पर छपा होता है।"],
        ["Which Method Should You Use?", "¿Qué método deberías usar?", "आपको कौन-सा तरीका अपनाना चाहिए?"],
        ["The *#06# method is usually the quickest because it works directly from the phone's dialer. Once you have your 15-digit IMEI, enter it into our checker to verify whether it passes the standard IMEI checksum validation.", "El método *#06# suele ser el más rápido porque funciona directamente desde el marcador del teléfono. Cuando tengas tu IMEI de 15 dígitos, introdúcelo en nuestro verificador para comprobar si supera la validación estándar de la suma de comprobación.", "*#06# वाला तरीका आमतौर पर सबसे तेज़ है, क्योंकि यह सीधे फ़ोन के डायलर से काम करता है। 15 अंकों का IMEI मिलने पर उसे हमारे चेकर में दर्ज करें और मानक IMEI चेकसम सत्यापन जाँचें।"],
        ["Important: Never share your IMEI publicly unless you have a specific reason to do so. Treat it as device information rather than something to post openly online.", "Importante: No compartas públicamente tu IMEI salvo que tengas un motivo concreto. Trátalo como información del dispositivo y no como algo que debas publicar en internet.", "महत्वपूर्ण: किसी विशेष कारण के बिना अपना IMEI सार्वजनिक रूप से साझा न करें। इसे डिवाइस की जानकारी मानें, इंटरनेट पर खुले तौर पर पोस्ट करने वाली चीज़ नहीं।"],
        ["Buying a Used Phone? Check the IMEI First.", "¿Vas a comprar un teléfono usado? Comprueba primero el IMEI.", "पुराना फ़ोन खरीद रहे हैं? पहले IMEI जाँचें।"],
        ["Before you buy a used phone, take a moment to check its IMEI.", "Antes de comprar un teléfono usado, dedica un momento a comprobar su IMEI.", "पुराना फ़ोन खरीदने से पहले उसका IMEI जाँच लें।"],
        ["Confirm the number", "Confirma el número", "नंबर की पुष्टि करें"],
        ["Compare the IMEI in the phone with the number on its box or paperwork, if available.", "Compara el IMEI del teléfono con el número de la caja o los documentos, si están disponibles.", "फ़ोन के IMEI की तुलना बॉक्स या दस्तावेज़ पर दिए नंबर से करें, यदि उपलब्ध हो।"],
        ["Check before paying", "Comprueba antes de pagar", "भुगतान से पहले जाँचें"],
        ["Use our checker to see whether the IMEI has the expected format and passes the checksum test.", "Usa nuestro verificador para comprobar si el IMEI tiene el formato esperado y supera la suma de comprobación.", "हमारे चेकर से जाँचें कि IMEI का प्रारूप सही है और वह चेकसम परीक्षण में पास होता है।"],
        ["Check more than the IMEI", "Comprueba algo más que el IMEI", "सिर्फ IMEI ही नहीं, और भी जाँचें"],
        ["A valid IMEI does not prove a phone is genuine, unlocked, or clear of a blacklist. Check the phone, account locks, network compatibility, paperwork, and seller too.", "Un IMEI válido no demuestra que el teléfono sea auténtico, esté desbloqueado o no figure en una lista negra. Comprueba también el teléfono, los bloqueos de cuenta, la compatibilidad de red, los documentos y al vendedor.", "सही IMEI यह साबित नहीं करता कि फ़ोन असली है, अनलॉक है या ब्लैकलिस्ट से मुक्त है। फ़ोन, अकाउंट लॉक, नेटवर्क अनुकूलता, कागज़ात और विक्रेता की भी जाँच करें।"],
        ["Remember: An IMEI check is one useful step, not a guarantee that a phone is safe to buy.", "Recuerda: comprobar el IMEI es un paso útil, no una garantía de que sea seguro comprar el teléfono.", "याद रखें: IMEI जाँचना एक उपयोगी कदम है, यह फ़ोन की सुरक्षित खरीद की गारंटी नहीं है।"],
        ["Frequently Asked Questions", "Preguntas frecuentes", "अक्सर पूछे जाने वाले प्रश्न"],
        ["What is an IMEI number?", "¿Qué es un número IMEI?", "IMEI नंबर क्या है?"],
        ["IMEI stands for International Mobile Equipment Identity. It is a unique identifier associated with a mobile device and is commonly represented as a 15-digit number. Mobile networks and device-related systems can use IMEI numbers to identify compatible devices.", "IMEI significa International Mobile Equipment Identity (identidad internacional de equipo móvil). Es un identificador único asociado a un dispositivo móvil y suele representarse con 15 dígitos. Las redes móviles y los sistemas relacionados pueden usarlo para identificar dispositivos compatibles.", "IMEI का अर्थ International Mobile Equipment Identity है। यह मोबाइल डिवाइस से जुड़ा एक विशिष्ट पहचानकर्ता है, जिसे आमतौर पर 15 अंकों के नंबर के रूप में दर्शाया जाता है। मोबाइल नेटवर्क और डिवाइस-संबंधी सिस्टम इसका उपयोग संगत डिवाइस की पहचान के लिए कर सकते हैं।"],
        ["How do I find my IMEI number?", "¿Cómo encuentro mi número IMEI?", "मैं अपना IMEI नंबर कैसे ढूँढूँ?"],
        ["On many mobile phones, you can display the IMEI by dialing *#06#. You can also usually find it in your device settings under an option such as “About Phone,” “About Device,” or similar. The exact location can vary depending on the manufacturer and operating system.", "En muchos teléfonos puedes mostrar el IMEI marcando *#06#. También suele aparecer en los ajustes, en una opción como «Acerca del teléfono» o «Información del dispositivo». La ubicación exacta depende del fabricante y del sistema operativo.", "कई मोबाइल फ़ोन पर *#06# डायल करके IMEI देखा जा सकता है। यह आमतौर पर सेटिंग्स में “फ़ोन के बारे में” या “डिवाइस के बारे में” जैसे विकल्प में भी मिलता है। सटीक स्थान निर्माता और ऑपरेटिंग सिस्टम के अनुसार बदल सकता है।"],
        ["What does the Real IMEI Check check?", "¿Qué comprueba Real IMEI Check?", "Real IMEI Check क्या जाँचता है?"],
        ["Our current checker performs basic IMEI validation. It checks whether the entered value contains the expected number of digits and whether it passes the standard IMEI checksum calculation.", "Nuestro verificador actual realiza una validación básica del IMEI. Comprueba que el valor tenga la cantidad de dígitos esperada y supere el cálculo estándar de la suma de comprobación.", "हमारा मौजूदा चेकर बुनियादी IMEI सत्यापन करता है। यह जाँचता है कि दर्ज मान में अपेक्षित अंकों की संख्या है और वह मानक IMEI चेकसम गणना में पास होता है।"],
        ["What does a valid IMEI result mean?", "¿Qué significa un resultado de IMEI válido?", "IMEI का वैध परिणाम क्या बताता है?"],
        ["A valid result means that the IMEI you entered has the expected format and passes the checksum validation performed by our tool. It does not guarantee that the device itself is genuine, that the IMEI has not been altered, or that the device is free from blacklist or carrier restrictions.", "Un resultado válido significa que el IMEI tiene el formato esperado y supera la validación de suma de comprobación de nuestra herramienta. No garantiza que el dispositivo sea auténtico, que el IMEI no se haya alterado ni que esté libre de listas negras o restricciones del operador.", "वैध परिणाम का अर्थ है कि दर्ज IMEI का प्रारूप अपेक्षित है और वह हमारे टूल के चेकसम सत्यापन में पास हुआ। इससे यह गारंटी नहीं मिलती कि डिवाइस असली है, IMEI बदला नहीं गया है या डिवाइस ब्लैकलिस्ट अथवा कैरियर प्रतिबंधों से मुक्त है।"],
        ["What does an invalid IMEI result mean?", "¿Qué significa un resultado de IMEI no válido?", "अवैध IMEI परिणाम का क्या अर्थ है?"],
        ["An invalid result means that the number entered does not pass one or more of the basic validation checks. Check the digits carefully and make sure that you entered the correct IMEI without spaces, letters, or additional characters.", "Un resultado no válido significa que el número no supera una o más comprobaciones básicas. Revisa bien los dígitos e introduce el IMEI correcto, sin espacios, letras ni caracteres adicionales.", "अवैध परिणाम का अर्थ है कि दर्ज नंबर एक या अधिक बुनियादी जाँचों में पास नहीं हुआ। अंकों को ध्यान से जाँचें और बिना रिक्त स्थान, अक्षर या अतिरिक्त वर्णों के सही IMEI दर्ज करें।"],
        ["Can I check an iPhone IMEI?", "¿Puedo comprobar el IMEI de un iPhone?", "क्या मैं iPhone का IMEI जाँच सकता हूँ?"],
        ["Yes. iPhones have IMEI numbers, and you can use our basic validator to check the format and checksum of an iPhone IMEI.", "Sí. Los iPhone tienen números IMEI y puedes usar nuestro validador básico para comprobar su formato y suma de comprobación.", "हाँ। iPhone में IMEI नंबर होता है और आप उसका प्रारूप तथा चेकसम जाँचने के लिए हमारे बुनियादी वैलिडेटर का उपयोग कर सकते हैं।"],
        ["Can I check an Android IMEI?", "¿Puedo comprobar un IMEI de Android?", "क्या मैं Android IMEI जाँच सकता हूँ?"],
        ["Yes. Android phones also commonly have IMEI numbers. You can enter the IMEI into our checker to perform the same basic validation.", "Sí. Los teléfonos Android también suelen tener un IMEI. Introdúcelo en nuestro verificador para realizar la misma validación básica.", "हाँ। Android फ़ोन में भी आमतौर पर IMEI नंबर होता है। वही बुनियादी सत्यापन करने के लिए IMEI को हमारे चेकर में दर्ज करें।"],
        ["Does an IMEI checker tell me whether a phone is stolen?", "क्या IMEI चेकर बताता है कि फ़ोन चोरी का है?", "क्या IMEI चेकर बता सकता है कि फ़ोन चोरी का है?"],
        ["Not necessarily. Basic IMEI validation only checks the structure and checksum of the number. Determining whether a device has been reported lost or stolen requires access to an appropriate blacklist or carrier database. A valid checksum should not be interpreted as proof that a device is clear or legitimate.", "No necesariamente. La validación básica solo comprueba la estructura y la suma de comprobación. Para saber si un dispositivo ha sido denunciado como perdido o robado se necesita consultar una lista negra o base de datos del operador. Una suma válida no demuestra que el dispositivo esté libre de restricciones ni que sea legítimo.", "ज़रूरी नहीं। बुनियादी IMEI सत्यापन केवल नंबर की संरचना और चेकसम जाँचता है। डिवाइस के खोए या चोरी हुए होने की रिपोर्ट जाँचने के लिए संबंधित ब्लैकलिस्ट या कैरियर डेटाबेस की आवश्यकता होती है। सही चेकसम को डिवाइस के स्पष्ट या वैध होने का प्रमाण न मानें।"],
        ["Does a valid IMEI mean the phone is genuine?", "क्या वैध IMEI का अर्थ है कि फ़ोन असली है?", "क्या वैध IMEI का मतलब फ़ोन असली है?"],
        ["No. A number passing checksum validation only means that it has a valid mathematical structure according to the validation method used. It does not independently prove the authenticity of a physical device.", "No. Que el número supere la suma de comprobación solo significa que tiene una estructura matemática válida según el método utilizado. No demuestra por sí solo la autenticidad del dispositivo físico.", "नहीं। चेकसम सत्यापन में पास होने का अर्थ केवल यह है कि उपयोग की गई विधि के अनुसार नंबर की गणितीय संरचना सही है। इससे भौतिक डिवाइस के असली होने का स्वतंत्र प्रमाण नहीं मिलता।"],
        ["Can an IMEI checker tell me the phone's location?", "क्या IMEI चेकर फ़ोन की लोकेशन बता सकता है?", "क्या IMEI चेकर फ़ोन की लोकेशन बता सकता है?"],
        ["No. An IMEI number by itself does not provide a user with a phone's live location, photographs, messages, accounts, or other private device content.", "No. El número IMEI por sí solo no permite conocer la ubicación en tiempo real, las fotos, los mensajes, las cuentas ni otros contenidos privados del teléfono.", "नहीं। केवल IMEI नंबर से फ़ोन की लाइव लोकेशन, फ़ोटो, संदेश, खाते या अन्य निजी सामग्री नहीं मिलती।"],
        ["Can an IMEI be changed?", "¿Se puede cambiar un IMEI?", "क्या IMEI बदला जा सकता है?"],
        ["Device identification systems can be subject to tampering, but changing or manipulating an IMEI may be restricted or illegal depending on the country and circumstances. Real IMEI Check does not provide instructions for modifying, spoofing, or bypassing device identifiers.", "Los sistemas de identificación pueden sufrir manipulaciones, pero cambiar o alterar un IMEI puede estar restringido o ser ilegal según el país y las circunstancias. Real IMEI Check no ofrece instrucciones para modificar, suplantar ni eludir identificadores de dispositivos.", "डिवाइस पहचान प्रणालियों से छेड़छाड़ संभव हो सकती है, लेकिन देश और परिस्थितियों के अनुसार IMEI बदलना प्रतिबंधित या अवैध हो सकता है। Real IMEI Check डिवाइस पहचानकर्ता बदलने, नकली बनाने या बायपास करने के निर्देश नहीं देता।"],
        ["Is Real IMEI Check free?", "¿Real IMEI Check es gratis?", "क्या Real IMEI Check निःशुल्क है?"],
        ["Yes. The basic IMEI validation tool is provided free of charge.", "Sí. La herramienta básica de validación de IMEI es gratuita.", "हाँ। बुनियादी IMEI सत्यापन टूल निःशुल्क उपलब्ध है।"],
        ["Do I need to create an account?", "¿Tengo que crear una cuenta?", "क्या मुझे खाता बनाना होगा?"],
        ["No account is required to use the basic IMEI checker.", "No se necesita una cuenta para usar el verificador básico de IMEI.", "बुनियादी IMEI चेकर का उपयोग करने के लिए खाते की आवश्यकता नहीं है।"],
        ["Does the checker guarantee that my phone will work on a network?", "क्या चेकर गारंटी देता है कि मेरा फ़ोन नेटवर्क पर काम करेगा?", "क्या चेकर गारंटी देता है कि मेरा फ़ोन नेटवर्क पर चलेगा?"],
        ["No. Network compatibility can depend on factors such as supported bands, carrier policies, SIM restrictions, regional variants, and device configuration. IMEI checksum validation does not determine network compatibility.", "No. La compatibilidad de red depende de factores como las bandas admitidas, las políticas del operador, las restricciones de SIM, las variantes regionales y la configuración del dispositivo. La suma de comprobación IMEI no determina esa compatibilidad.", "नहीं। नेटवर्क अनुकूलता समर्थित बैंड, कैरियर नीतियों, SIM प्रतिबंधों, क्षेत्रीय वेरिएंट और डिवाइस कॉन्फ़िगरेशन पर निर्भर हो सकती है। IMEI चेकसम सत्यापन नेटवर्क अनुकूलता निर्धारित नहीं करता।"],
        ["Why does my phone have two IMEI numbers?", "¿Por qué mi teléfono tiene dos números IMEI?", "मेरे फ़ोन में दो IMEI नंबर क्यों हैं?"],
        ["Many dual-SIM devices have two IMEI numbers because each cellular radio/SIM connection can have its own device identifier. If your phone displays IMEI 1 and IMEI 2, you may need to check the relevant number depending on the situation.", "Muchos dispositivos con doble SIM tienen dos números IMEI porque cada conexión de radio/SIM puede tener su propio identificador. Si tu teléfono muestra IMEI 1 e IMEI 2, comprueba el número correspondiente según el caso.", "कई डुअल-SIM डिवाइस में दो IMEI नंबर होते हैं, क्योंकि प्रत्येक सेलुलर रेडियो/SIM कनेक्शन का अपना पहचानकर्ता हो सकता है। यदि फ़ोन IMEI 1 और IMEI 2 दिखाता है, तो स्थिति के अनुसार संबंधित नंबर जाँचें।"],
        ["Is it safe to enter an IMEI online?", "¿Es seguro introducir un IMEI en internet?", "क्या ऑनलाइन IMEI दर्ज करना सुरक्षित है?"],
        ["An IMEI is a device identifier rather than the contents of your phone. However, you should still understand how a website handles information submitted to it. Real IMEI Check aims to keep its basic validation process simple and transparent. Please review our Privacy Policy for information about website data and third-party services.", "Un IMEI identifica el dispositivo, no contiene los datos de tu teléfono. Aun así, conviene entender cómo gestiona un sitio web la información que recibe. Real IMEI Check procura que la validación básica sea sencilla y transparente. Consulta nuestra Política de privacidad para obtener información sobre los datos y los servicios de terceros.", "IMEI डिवाइस की पहचान करता है, आपके फ़ोन की सामग्री नहीं। फिर भी, वेबसाइट पर भेजी गई जानकारी कैसे संभाली जाती है, यह समझना चाहिए। Real IMEI Check सत्यापन प्रक्रिया को सरल और पारदर्शी रखने का प्रयास करता है। वेबसाइट डेटा और तृतीय-पक्ष सेवाओं की जानकारी के लिए हमारी गोपनीयता नीति देखें।"],
        ["Does Real IMEI Check belong to Apple or Android?", "¿Real IMEI Check pertenece a Apple o Android?", "क्या Real IMEI Check Apple या Android का है?"],
        ["No. Real IMEI Check is an independent service and is not operated by or affiliated with Apple, Google, Samsung, or another device manufacturer unless specifically stated.", "No. Real IMEI Check es un servicio independiente y no está operado ni afiliado a Apple, Google, Samsung u otro fabricante, salvo que se indique expresamente.", "नहीं। Real IMEI Check एक स्वतंत्र सेवा है और जब तक स्पष्ट रूप से न कहा गया हो, यह Apple, Google, Samsung या किसी अन्य डिवाइस निर्माता द्वारा संचालित या उनसे संबद्ध नहीं है।"],
        ["Why is my IMEI not working?", "¿Por qué no funciona mi IMEI?", "मेरा IMEI काम क्यों नहीं कर रहा है?"],
        ["First, verify that you copied the correct number and that all digits are entered correctly. Make sure there are no spaces, letters, or extra characters. If the number still fails validation, compare it with the IMEI shown in your device settings or on the original device packaging.", "Primero, comprueba que copiaste el número correcto y que introdujiste bien todos los dígitos. Asegúrate de que no haya espacios, letras ni caracteres adicionales. Si sigue sin superar la validación, compáralo con el IMEI de los ajustes o del embalaje original.", "पहले सुनिश्चित करें कि आपने सही नंबर कॉपी किया है और सभी अंक सही दर्ज किए हैं। कोई रिक्त स्थान, अक्षर या अतिरिक्त वर्ण न हों। यदि नंबर फिर भी सत्यापन में पास न हो, तो उसे डिवाइस सेटिंग्स या मूल पैकेजिंग पर दिए IMEI से मिलाएँ।"],
        ["Can I use the checker on a computer?", "¿Puedo usar el verificador en un ordenador?", "क्या मैं कंप्यूटर पर चेकर का उपयोग कर सकता हूँ?"],
        ["Yes. The website is designed to work through a modern web browser on computers, tablets, and mobile devices.", "Sí. El sitio web está diseñado para funcionar en navegadores modernos de ordenadores, tabletas y dispositivos móviles.", "हाँ। यह वेबसाइट कंप्यूटर, टैबलेट और मोबाइल डिवाइस पर आधुनिक वेब ब्राउज़र में काम करने के लिए बनाई गई है।"],
        ["What should I do if I believe my phone has a blacklisted IMEI?", "Si creo que el IMEI de mi teléfono está en una lista negra, ¿qué hago?", "यदि मुझे लगता है कि मेरे फ़ोन का IMEI ब्लैकलिस्ट है, तो क्या करूँ?"],
        ["If you believe an IMEI has been incorrectly blacklisted, contact the relevant mobile carrier, seller, manufacturer, or authorized service provider. Keep proof of purchase and other ownership documentation where applicable.", "Si crees que un IMEI se incluyó por error en una lista negra, contacta con el operador, vendedor, fabricante o servicio autorizado correspondiente. Conserva el comprobante de compra y otros documentos de propiedad, si corresponde.", "यदि आपको लगता है कि IMEI को गलती से ब्लैकलिस्ट किया गया है, तो संबंधित मोबाइल कैरियर, विक्रेता, निर्माता या अधिकृत सेवा प्रदाता से संपर्क करें। जहाँ लागू हो, खरीद का प्रमाण और स्वामित्व दस्तावेज़ सुरक्षित रखें।"],
        ["Can Real IMEI Check identify my exact phone model?", "¿Puede Real IMEI Check identificar el modelo exacto de mi teléfono?", "क्या Real IMEI Check मेरे फ़ोन का सटीक मॉडल पहचान सकता है?"],
        ["The basic version of our checker is focused on IMEI format and checksum validation. Model identification requires additional device/TAC databases and is not guaranteed by checksum validation alone.", "La versión básica se centra en el formato IMEI y la suma de comprobación. Identificar el modelo requiere bases de datos adicionales de dispositivos/TAC y no se garantiza solo con la validación del checksum.", "हमारा बुनियादी चेकर IMEI प्रारूप और चेकसम सत्यापन पर केंद्रित है। मॉडल पहचानने के लिए अतिरिक्त डिवाइस/TAC डेटाबेस चाहिए; केवल चेकसम सत्यापन इसकी गारंटी नहीं देता।"],
        ["Still have questions? Contact Us!", "¿Aún tienes preguntas? ¡Contáctanos!", "अभी भी सवाल हैं? हमसे संपर्क करें!"],
        ["Drop your Message", "Envíanos tu mensaje", "अपना संदेश भेजें"],
        ["Name", "Nombre", "नाम"],
        ["Email", "Correo electrónico", "ईमेल"],
        ["Message", "Mensaje", "संदेश"],
        ["Your message", "Tu mensaje", "आपका संदेश"],
        ["Submit", "Enviar", "जमा करें"],
        ["Gmail draft opened", "Borrador de Gmail abierto", "Gmail ड्राफ़्ट खुल गया"],
        ["Send the message in Gmail, then return here and confirm to refresh this page.", "Envía el mensaje en Gmail y vuelve aquí para confirmar y actualizar esta página.", "Gmail में संदेश भेजें, फिर यहाँ लौटकर इस पृष्ठ को रीफ़्रेश करने की पुष्टि करें।"],
        ["Open Gmail draft", "Abrir borrador de Gmail", "Gmail ड्राफ़्ट खोलें"],
        ["I sent it — refresh page", "Ya lo envié — actualizar página", "मैंने भेज दिया — पेज रीफ़्रेश करें"],
        ["Back to form", "Volver al formulario", "फ़ॉर्म पर वापस जाएँ"],
        ["Missing IMEI", "Falta el IMEI", "IMEI दर्ज नहीं है"],
        ["Please enter an IMEI number.", "Introduce un número IMEI.", "कृपया IMEI नंबर दर्ज करें।"],
        ["Invalid IMEI", "IMEI no válido", "अमान्य IMEI"],
        ["An IMEI number should contain exactly 15 digits.", "Un número IMEI debe contener exactamente 15 dígitos.", "IMEI नंबर में ठीक 15 अंक होने चाहिए।"],
        ["Valid IMEI Format", "Formato IMEI válido", "वैध IMEI प्रारूप"],
        ["This IMEI passes the standard checksum validation.", "Este IMEI supera la validación estándar de la suma de comprobación.", "यह IMEI मानक चेकसम सत्यापन में पास होता है।"],
        ["This IMEI does not pass the standard checksum validation.", "Este IMEI no supera la validación estándar de la suma de comprobación.", "यह IMEI मानक चेकसम सत्यापन में पास नहीं होता है।"],
        ["About Real IMEI Check", "Acerca de Real IMEI Check", "Real IMEI Check के बारे में"],
        ["Welcome to Real IMEI Check, a simple and easy-to-use online tool created to help people understand and validate IMEI numbers without complicated steps, registrations, or unnecessary technical jargon. An IMEI, or International Mobile Equipment Identity, is a number associated with a mobile device and is commonly used by networks and device services to identify phones and other compatible equipment. Our goal is to make basic IMEI validation accessible to everyone, whether you are checking your own phone, learning about how IMEI numbers work, developing a mobile-related application, or simply trying to understand whether an IMEI has the correct structure.", "Te damos la bienvenida a Real IMEI Check, una herramienta en línea sencilla y fácil de usar para comprender y validar números IMEI sin pasos complicados, registros ni tecnicismos innecesarios. Un IMEI (International Mobile Equipment Identity) es un número asociado a un dispositivo móvil que redes y servicios utilizan para identificar teléfonos y otros equipos compatibles. Nuestro objetivo es que la validación básica del IMEI esté al alcance de todos, tanto si compruebas tu teléfono, aprendes cómo funcionan los IMEI, desarrollas una aplicación móvil o simplemente quieres saber si un IMEI tiene la estructura correcta.", "Real IMEI Check में आपका स्वागत है। यह एक सरल और उपयोग में आसान ऑनलाइन टूल है, जो जटिल चरणों, पंजीकरण या अनावश्यक तकनीकी शब्दों के बिना IMEI नंबर समझने और सत्यापित करने में मदद करता है। IMEI (International Mobile Equipment Identity) मोबाइल डिवाइस से जुड़ा नंबर है, जिसका उपयोग नेटवर्क और डिवाइस सेवाएँ फ़ोन तथा अन्य संगत उपकरणों की पहचान के लिए करती हैं। हमारा उद्देश्य बुनियादी IMEI सत्यापन सभी के लिए सुलभ बनाना है—चाहे आप अपना फ़ोन जाँचें, IMEI के काम करने का तरीका सीखें, मोबाइल ऐप बनाएँ या केवल नंबर की सही संरचना समझना चाहें।"],
        ["Real IMEI Check focuses on providing a fast and straightforward experience. You enter an IMEI number, and our checker analyzes its format and standard checksum to determine whether the number passes basic IMEI validation. The process is designed to be simple enough for anyone to use while still following the standard validation principles used for IMEI numbers. We believe useful online tools do not need to be complicated, overloaded with unnecessary features, or hidden behind registration forms.", "Real IMEI Check ofrece una experiencia rápida y sencilla. Introduces un IMEI y nuestro verificador analiza su formato y suma de comprobación estándar para determinar si supera la validación básica. El proceso es fácil para cualquiera y sigue los principios estándar de validación de IMEI. Creemos que las herramientas útiles no tienen por qué ser complicadas, estar sobrecargadas de funciones innecesarias ni ocultarse tras formularios de registro.", "Real IMEI Check तेज़ और सरल अनुभव देने पर केंद्रित है। आप IMEI नंबर दर्ज करते हैं और हमारा चेकर उसके प्रारूप तथा मानक चेकसम का विश्लेषण करके बुनियादी सत्यापन करता है। यह प्रक्रिया हर किसी के लिए आसान है और IMEI के मानक सत्यापन सिद्धांतों का पालन करती है। उपयोगी ऑनलाइन टूल जटिल, अनावश्यक सुविधाओं से भरे या पंजीकरण फ़ॉर्म के पीछे छिपे होने ज़रूरी नहीं हैं।"],
        ["Our website is designed primarily as an informational and validation tool. A successful IMEI validation means that the number passes the structural and checksum checks performed by our tool. It does not, by itself, confirm that a device is genuine, that it has not been reported lost or stolen, that it is free from a carrier or network restriction, or that it is eligible for warranty service. Those types of information require access to appropriate carrier, manufacturer, government, or specialized databases and may vary by country and device.", "Nuestro sitio web es principalmente una herramienta informativa y de validación. Una validación correcta significa que el número supera las comprobaciones estructurales y de suma de control de la herramienta. Por sí sola, no confirma que el dispositivo sea auténtico, no se haya denunciado como perdido o robado, esté libre de restricciones del operador o la red, ni tenga derecho a garantía. Esa información requiere consultar bases de datos adecuadas de operadores, fabricantes, gobiernos o servicios especializados y puede variar según el país y el dispositivo.", "हमारी वेबसाइट मुख्य रूप से जानकारी और सत्यापन के लिए बनाई गई है। IMEI सत्यापन में पास होने का अर्थ है कि नंबर ने हमारे टूल की संरचना और चेकसम जाँचें पास कीं। इससे अपने-आप यह पुष्टि नहीं होती कि डिवाइस असली है, खोए या चोरी हुए के रूप में रिपोर्ट नहीं किया गया, कैरियर या नेटवर्क प्रतिबंध से मुक्त है या वारंटी सेवा के योग्य है। ऐसी जानकारी के लिए संबंधित कैरियर, निर्माता, सरकारी या विशेष डेटाबेस की आवश्यकता होती है और यह देश तथा डिवाइस के अनुसार बदल सकती है।"],
        ["We are continuously interested in improving the accuracy, usability, speed, and accessibility of Real IMEI Check. As the website develops, we may add additional educational resources and tools that help visitors better understand IMEI numbers, mobile devices, and related terminology. Our aim is to keep the service simple while providing useful information that people can understand and trust.", "Trabajamos continuamente para mejorar la precisión, facilidad de uso, velocidad y accesibilidad de Real IMEI Check. A medida que evolucione el sitio, podremos añadir recursos educativos y herramientas para comprender mejor los IMEI, los dispositivos móviles y la terminología relacionada. Queremos mantener un servicio sencillo y ofrecer información útil, comprensible y fiable.", "हम Real IMEI Check की सटीकता, उपयोगिता, गति और पहुँच में लगातार सुधार करना चाहते हैं। वेबसाइट विकसित होने पर हम IMEI नंबर, मोबाइल डिवाइस और संबंधित शब्दावली को बेहतर समझने में मदद के लिए शैक्षिक संसाधन तथा टूल जोड़ सकते हैं। हमारा उद्देश्य सेवा को सरल रखना और उपयोगी, समझने योग्य तथा भरोसेमंद जानकारी देना है।"],
        ["Real IMEI Check is an independent website and is not affiliated with Apple, Google, Samsung, Xiaomi, Huawei, or any mobile network operator or device manufacturer unless explicitly stated. Brand names and trademarks belong to their respective owners.", "Real IMEI Check es un sitio web independiente y no está afiliado a Apple, Google, Samsung, Xiaomi, Huawei ni a ningún operador móvil o fabricante, salvo que se indique expresamente. Las marcas y marcas registradas pertenecen a sus respectivos propietarios.", "Real IMEI Check एक स्वतंत्र वेबसाइट है और स्पष्ट रूप से बताए जाने तक Apple, Google, Samsung, Xiaomi, Huawei, किसी मोबाइल नेटवर्क ऑपरेटर या डिवाइस निर्माता से संबद्ध नहीं है। ब्रांड नाम और ट्रेडमार्क उनके संबंधित स्वामियों के हैं।"],
        ["Thank you for using Real IMEI Check. Our goal is simple: provide a fast, understandable, and useful place to check and learn about IMEI numbers.", "Gracias por usar Real IMEI Check. Nuestro objetivo es sencillo: ofrecer un lugar rápido, claro y útil para consultar y aprender sobre números IMEI.", "Real IMEI Check का उपयोग करने के लिए धन्यवाद। हमारा सरल उद्देश्य IMEI नंबर जाँचने और उनके बारे में सीखने के लिए तेज़, समझने योग्य और उपयोगी सेवा देना है।"],
        ["Last updated: October 6, 2026", "Última actualización: 6 de octubre de 2026", "अंतिम अपडेट: 6 अक्टूबर, 2026"],
        ["Terms and Conditions", "Términos y condiciones", "नियम और शर्तें"],
        ["Privacy Policy - Real IMEI Check", "Política de privacidad - Real IMEI Check", "गोपनीयता नीति - Real IMEI Check"],
        ["Terms and Conditions - Real IMEI Check", "Términos y condiciones - Real IMEI Check", "नियम और शर्तें - Real IMEI Check"],
        ["Real IMEI Check - Check IMEI Number Online", "Real IMEI Check - Comprueba números IMEI en línea", "Real IMEI Check - ऑनलाइन IMEI नंबर जाँचें"],
        ["Welcome to Real IMEI Check. These Terms and Conditions (“Terms”) govern your access to and use of the Real IMEI Check website and its tools.", "Te damos la bienvenida a Real IMEI Check. Estos Términos y condiciones («Términos») regulan el acceso y uso del sitio web y sus herramientas.", "Real IMEI Check में आपका स्वागत है। ये नियम और शर्तें (“नियम”) Real IMEI Check वेबसाइट और इसके टूल के आपके उपयोग तथा पहुँच को नियंत्रित करती हैं।"],
        ["By accessing or using this website, you agree to these Terms. If you do not agree with any part of these Terms, please do not use the website.", "Al acceder o utilizar este sitio web, aceptas estos Términos. Si no estás de acuerdo con alguna parte, no utilices el sitio web.", "इस वेबसाइट को खोलकर या उपयोग करके आप इन नियमों से सहमत होते हैं। यदि आप किसी भी भाग से सहमत नहीं हैं, तो कृपया वेबसाइट का उपयोग न करें।"],
        ["1. About Real IMEI Check", "1. Acerca de Real IMEI Check", "1. Real IMEI Check के बारे में"],
        ["Real IMEI Check provides online informational and validation tools related to International Mobile Equipment Identity (IMEI) numbers.", "Real IMEI Check ofrece herramientas informativas y de validación en línea relacionadas con los números IMEI (International Mobile Equipment Identity).", "Real IMEI Check International Mobile Equipment Identity (IMEI) नंबरों से संबंधित ऑनलाइन जानकारी और सत्यापन टूल प्रदान करता है।"],
        ["Our primary IMEI checker analyzes an entered IMEI number to determine whether it follows the expected format and passes the standard checksum validation.", "Nuestro verificador principal analiza el IMEI introducido para determinar si tiene el formato esperado y supera la validación estándar de la suma de comprobación.", "हमारा मुख्य IMEI चेकर दर्ज किए गए नंबर का विश्लेषण करके जाँचता है कि उसका प्रारूप अपेक्षित है और वह मानक चेकसम सत्यापन में पास होता है।"],
        ["The website does not claim to provide complete information about a mobile device, its ownership, legal status, network status, warranty, or blacklist status unless a specific service explicitly states otherwise.", "Salvo que un servicio específico indique expresamente lo contrario, el sitio no ofrece información completa sobre un dispositivo, su propiedad, situación legal o de red, garantía o estado en listas negras.", "किसी विशिष्ट सेवा में स्पष्ट रूप से अन्यथा न बताए जाने तक, वेबसाइट मोबाइल डिवाइस, उसके स्वामित्व, कानूनी या नेटवर्क स्थिति, वारंटी अथवा ब्लैकलिस्ट स्थिति की पूरी जानकारी देने का दावा नहीं करती।"],
        ["2. Use of the Website", "2. Uso del sitio web", "2. वेबसाइट का उपयोग"],
        ["You may use Real IMEI Check for lawful purposes and in accordance with these Terms.", "Puedes utilizar Real IMEI Check con fines legales y de acuerdo con estos Términos.", "आप इन नियमों के अनुसार और वैध उद्देश्यों के लिए Real IMEI Check का उपयोग कर सकते हैं।"],
        ["You agree not to:", "Te comprometes a no:", "आप सहमत हैं कि:"],
        ["Use the website for unlawful activities.", "Utilizar el sitio web para actividades ilegales.", "वेबसाइट का उपयोग गैरकानूनी गतिविधियों के लिए नहीं करेंगे।"],
        ["Attempt to disrupt, damage, overload, or interfere with the website.", "Intentar interrumpir, dañar, sobrecargar o interferir con el sitio web.", "वेबसाइट को बाधित, क्षतिग्रस्त, ओवरलोड या प्रभावित करने का प्रयास नहीं करेंगे।"],
        ["Attempt to gain unauthorized access to the website, its servers, databases, or systems.", "Intentar obtener acceso no autorizado al sitio, sus servidores, bases de datos o sistemas.", "वेबसाइट, सर्वर, डेटाबेस या सिस्टम तक अनधिकृत पहुँच का प्रयास नहीं करेंगे।"],
        ["Use automated methods to abuse, overload, scrape, or interfere with the service.", "Utilizar métodos automatizados para abusar del servicio, sobrecargarlo, extraer datos o interferir con él.", "सेवा का दुरुपयोग, ओवरलोड, डेटा स्क्रैप या हस्तक्षेप करने के लिए स्वचालित तरीके इस्तेमाल नहीं करेंगे।"],
        ["Attempt to bypass security or access restrictions.", "Intentar eludir las medidas de seguridad o las restricciones de acceso.", "सुरक्षा या पहुँच प्रतिबंधों को बायपास करने का प्रयास नहीं करेंगे।"],
        ["Use information obtained from the website to violate another person's rights.", "Utilizar la información del sitio para vulnerar los derechos de otra persona.", "वेबसाइट से प्राप्त जानकारी का उपयोग किसी अन्य व्यक्ति के अधिकारों का उल्लंघन करने के लिए नहीं करेंगे।"],
        ["Use the website to facilitate fraud, deception, or other unlawful activity.", "Utilizar el sitio para facilitar fraudes, engaños u otras actividades ilegales.", "वेबसाइट का उपयोग धोखाधड़ी, छल या अन्य गैरकानूनी गतिविधियों में मदद के लिए नहीं करेंगे।"],
        ["We reserve the right to restrict or terminate access to the website where necessary to protect the service, its users, or our infrastructure.", "Nos reservamos el derecho de restringir o cancelar el acceso cuando sea necesario para proteger el servicio, a sus usuarios o nuestra infraestructura.", "सेवा, उपयोगकर्ताओं या हमारे बुनियादी ढाँचे की सुरक्षा के लिए आवश्यक होने पर हम वेबसाइट तक पहुँच सीमित या समाप्त करने का अधिकार रखते हैं।"],
        ["3. IMEI Validation Results", "3. Resultados de la validación IMEI", "3. IMEI सत्यापन परिणाम"],
        ["The results provided by Real IMEI Check are intended for informational purposes.", "Los resultados de Real IMEI Check tienen fines informativos.", "Real IMEI Check के परिणाम केवल जानकारी के उद्देश्य से हैं।"],
        ["A “valid” IMEI result generally means that the entered number satisfies the format and checksum validation performed by the tool.", "Un resultado de IMEI «válido» suele significar que el número cumple el formato y la validación de suma de comprobación de la herramienta.", "“वैध” IMEI परिणाम का सामान्य अर्थ है कि दर्ज नंबर टूल के प्रारूप और चेकसम सत्यापन में पास हुआ।"],
        ["A valid checksum does not necessarily mean:", "Una suma de comprobación válida no significa necesariamente que:", "सही चेकसम का यह अर्थ आवश्यक रूप से नहीं है कि:"],
        ["The device is genuine.", "El dispositivo sea auténtico.", "डिवाइस असली है।"],
        ["The device belongs to you.", "El dispositivo te pertenezca.", "डिवाइस आपका है।"],
        ["The device has not been reported lost or stolen.", "El dispositivo no se haya denunciado como perdido o robado.", "डिवाइस के खोने या चोरी होने की रिपोर्ट नहीं हुई है।"],
        ["The device is not blacklisted.", "El dispositivo no figure en una lista negra.", "डिवाइस ब्लैकलिस्ट में नहीं है।"],
        ["The device is unlocked.", "El dispositivo esté desbloqueado.", "डिवाइस अनलॉक है।"],
        ["The device is compatible with a particular mobile network.", "El dispositivo sea compatible con una red móvil concreta.", "डिवाइस किसी विशेष मोबाइल नेटवर्क के अनुकूल है।"],
        ["The device is eligible for warranty service.", "El dispositivo tenga derecho a servicio de garantía.", "डिवाइस वारंटी सेवा के योग्य है।"],
        ["The IMEI has never been altered or manipulated.", "El IMEI nunca se haya alterado o manipulado.", "IMEI को कभी बदला या उसमें छेड़छाड़ नहीं की गई है।"],
        ["Similarly, an invalid result may occur because the number was entered incorrectly or does not satisfy the validation rules used by the checker.", "Del mismo modo, un resultado no válido puede deberse a que el número se introdujo incorrectamente o no cumple las reglas del verificador.", "इसी तरह, गलत परिणाम नंबर गलत दर्ज होने या चेकर के सत्यापन नियमों पर खरा न उतरने के कारण हो सकता है।"],
        ["4. No Guarantee of Accuracy", "4. Sin garantía de exactitud", "4. सटीकता की कोई गारंटी नहीं"],
        ["Although we aim to provide accurate and useful tools, we do not guarantee that all information, calculations, results, or content available through the website will always be complete, accurate, current, or error-free.", "Aunque procuramos ofrecer herramientas precisas y útiles, no garantizamos que toda la información, los cálculos, resultados o contenidos del sitio sean siempre completos, exactos, actuales o estén libres de errores.", "हम सटीक और उपयोगी टूल देने का प्रयास करते हैं, लेकिन वेबसाइट पर उपलब्ध सभी जानकारी, गणनाओं, परिणामों या सामग्री के हमेशा पूर्ण, सटीक, अद्यतन या त्रुटिरहित होने की गारंटी नहीं देते।"],
        ["Technical problems, browser issues, changes to industry standards, third-party services, or other circumstances may affect the website or its results.", "Los problemas técnicos, del navegador, los cambios en los estándares del sector, los servicios de terceros u otras circunstancias pueden afectar al sitio o sus resultados.", "तकनीकी समस्याएँ, ब्राउज़र संबंधी दिक्कतें, उद्योग मानकों में बदलाव, तृतीय-पक्ष सेवाएँ या अन्य परिस्थितियाँ वेबसाइट अथवा उसके परिणामों को प्रभावित कर सकती हैं।"],
        ["You are responsible for independently verifying important information before making purchasing, financial, legal, technical, or other significant decisions based on information obtained from the website.", "Eres responsable de verificar por tu cuenta la información importante antes de tomar decisiones de compra, financieras, legales, técnicas u otras decisiones significativas basadas en este sitio.", "वेबसाइट से मिली जानकारी के आधार पर खरीदारी, वित्तीय, कानूनी, तकनीकी या अन्य महत्वपूर्ण निर्णय लेने से पहले उसकी स्वतंत्र रूप से पुष्टि करना आपकी ज़िम्मेदारी है।"],
        ["5. Device Ownership and Legal Responsibility", "5. Propiedad del dispositivo y responsabilidad legal", "5. डिवाइस का स्वामित्व और कानूनी ज़िम्मेदारी"],
        ["Real IMEI Check does not determine ownership of a device.", "Real IMEI Check no determina quién es el propietario de un dispositivo.", "Real IMEI Check यह निर्धारित नहीं करता कि डिवाइस का स्वामी कौन है।"],
        ["You are responsible for ensuring that your use of the website and any device-related information complies with the laws applicable to you.", "Eres responsable de garantizar que el uso del sitio y de la información del dispositivo cumpla las leyes aplicables.", "यह सुनिश्चित करना आपकी ज़िम्मेदारी है कि वेबसाइट और डिवाइस-संबंधी जानकारी का उपयोग आप पर लागू कानूनों के अनुरूप हो।"],
        ["We do not provide instructions or services intended to assist with illegally changing, spoofing, cloning, or manipulating device identifiers.", "No ofrecemos instrucciones ni servicios para cambiar, suplantar, clonar o manipular ilegalmente identificadores de dispositivos.", "हम डिवाइस पहचानकर्ताओं को अवैध रूप से बदलने, नकली बनाने, क्लोन करने या उनमें छेड़छाड़ करने के निर्देश या सेवाएँ नहीं देते।"],
        ["6. Third-Party Services and Links", "6. Servicios y enlaces de terceros", "6. तृतीय-पक्ष सेवाएँ और लिंक"],
        ["The website may contain links to third-party websites, services, or resources.", "El sitio web puede incluir enlaces a sitios, servicios o recursos de terceros.", "वेबसाइट में तृतीय-पक्ष वेबसाइटों, सेवाओं या संसाधनों के लिंक हो सकते हैं।"],
        ["These third-party websites are not controlled by Real IMEI Check. We are not responsible for their content, availability, security, privacy practices, or terms.", "Real IMEI Check no controla esos sitios de terceros y no es responsable de su contenido, disponibilidad, seguridad, prácticas de privacidad ni condiciones.", "इन तृतीय-पक्ष वेबसाइटों को Real IMEI Check नियंत्रित नहीं करता। उनकी सामग्री, उपलब्धता, सुरक्षा, गोपनीयता प्रथाओं या शर्तों के लिए हम ज़िम्मेदार नहीं हैं।"],
        ["Your use of third-party websites is subject to the terms and policies of those websites.", "El uso de sitios de terceros está sujeto a sus propios términos y políticas.", "तृतीय-पक्ष वेबसाइटों का आपका उपयोग उनकी शर्तों और नीतियों के अधीन है।"],
        ["7. Advertising", "7. Publicidad", "7. विज्ञापन"],
        ["Real IMEI Check may display advertisements provided by third-party advertising networks.", "Real IMEI Check puede mostrar anuncios de redes publicitarias de terceros.", "Real IMEI Check तृतीय-पक्ष विज्ञापन नेटवर्क के विज्ञापन दिखा सकता है।"],
        ["Advertisements may be selected or delivered by third-party providers based on various factors, including website content, general location, browsing context, or other permitted information.", "Los proveedores pueden seleccionar o mostrar anuncios según distintos factores, como el contenido del sitio, la ubicación aproximada, el contexto de navegación u otra información permitida.", "तृतीय-पक्ष प्रदाता वेबसाइट की सामग्री, सामान्य स्थान, ब्राउज़िंग संदर्भ या अन्य अनुमत जानकारी सहित विभिन्न कारकों के आधार पर विज्ञापन चुन या दिखा सकते हैं।"],
        ["Real IMEI Check does not necessarily endorse products or services displayed through third-party advertisements.", "Real IMEI Check no respalda necesariamente los productos o servicios anunciados por terceros.", "Real IMEI Check तृतीय-पक्ष विज्ञापनों में दिखाए गए उत्पादों या सेवाओं का आवश्यक रूप से समर्थन नहीं करता।"],
        ["8. Intellectual Property", "8. Propiedad intelectual", "8. बौद्धिक संपदा"],
        ["Unless otherwise stated, the website's original design, text, graphics, logos, code, and other content are owned by or licensed to Real IMEI Check.", "Salvo que se indique lo contrario, el diseño, texto, gráficos, logotipos, código y demás contenido original del sitio pertenecen a Real IMEI Check o se utilizan bajo licencia.", "अन्यथा बताए जाने तक, वेबसाइट का मूल डिज़ाइन, पाठ, ग्राफ़िक्स, लोगो, कोड और अन्य सामग्री Real IMEI Check के स्वामित्व में है या इसे लाइसेंस के तहत उपयोग किया गया है।"],
        ["You may access and use the website for personal and lawful purposes.", "Puedes acceder al sitio y utilizarlo con fines personales y legales.", "आप व्यक्तिगत और वैध उद्देश्यों के लिए वेबसाइट खोल और उपयोग कर सकते हैं।"],
        ["You may not reproduce, copy, modify, distribute, sell, republish, or commercially exploit substantial portions of the website's content or code without appropriate authorization.", "Sin autorización adecuada, no puedes reproducir, copiar, modificar, distribuir, vender, volver a publicar ni explotar comercialmente partes sustanciales del contenido o código del sitio.", "उचित अनुमति के बिना आप वेबसाइट की पर्याप्त सामग्री या कोड को पुनरुत्पादित, कॉपी, संशोधित, वितरित, बेच, पुनः प्रकाशित या व्यावसायिक रूप से उपयोग नहीं कर सकते।"],
        ["Third-party trademarks, logos, product names, and brand names remain the property of their respective owners.", "Las marcas, logotipos y nombres de productos de terceros siguen siendo propiedad de sus respectivos titulares.", "तृतीय-पक्ष ट्रेडमार्क, लोगो, उत्पाद नाम और ब्रांड नाम उनके संबंधित स्वामियों की संपत्ति बने रहते हैं।"],
        ["9. Service Availability", "9. Disponibilidad del servicio", "9. सेवा की उपलब्धता"],
        ["We may modify, update, suspend, or discontinue any part of the website or its tools at any time.", "Podemos modificar, actualizar, suspender o interrumpir cualquier parte del sitio o sus herramientas en cualquier momento.", "हम किसी भी समय वेबसाइट या उसके टूल के किसी भाग को संशोधित, अपडेट, निलंबित या बंद कर सकते हैं।"],
        ["We do not guarantee that the website will always be available, uninterrupted, secure, or free from technical problems.", "No garantizamos que el sitio esté siempre disponible, funcione sin interrupciones, sea seguro o esté libre de problemas técnicos.", "हम वेबसाइट की हमेशा उपलब्धता, निर्बाध संचालन, सुरक्षा या तकनीकी समस्याओं से मुक्त होने की गारंटी नहीं देते।"],
        ["Maintenance, hosting problems, network failures, security issues, or other circumstances may temporarily affect availability.", "El mantenimiento, los problemas de alojamiento, fallos de red, problemas de seguridad u otras circunstancias pueden afectar temporalmente a la disponibilidad.", "रखरखाव, होस्टिंग समस्याएँ, नेटवर्क विफलताएँ, सुरक्षा समस्याएँ या अन्य परिस्थितियाँ अस्थायी रूप से उपलब्धता को प्रभावित कर सकती हैं।"],
        ["10. Limitation of Liability", "10. Limitación de responsabilidad", "10. दायित्व की सीमा"],
        ["To the maximum extent permitted by applicable law, Real IMEI Check and its operators shall not be responsible for losses, damages, or consequences arising from reliance on information, calculations, validation results, website content, advertisements, or third-party services accessed through the website.", "En la medida máxima permitida por la ley aplicable, Real IMEI Check y sus operadores no serán responsables de pérdidas, daños o consecuencias derivadas de confiar en información, cálculos, resultados de validación, contenido, anuncios o servicios de terceros del sitio.", "लागू कानून द्वारा अनुमत अधिकतम सीमा तक, वेबसाइट की जानकारी, गणनाओं, सत्यापन परिणामों, सामग्री, विज्ञापनों या तृतीय-पक्ष सेवाओं पर भरोसा करने से हुए नुकसान, क्षति या परिणामों के लिए Real IMEI Check और उसके संचालक ज़िम्मेदार नहीं होंगे।"],
        ["This includes, where legally permitted, indirect, incidental, consequential, or loss-of-profit damages.", "Esto incluye, cuando la ley lo permita, daños indirectos, incidentales, consecuentes o pérdida de beneficios.", "इसमें, जहाँ कानून अनुमति देता है, अप्रत्यक्ष, आकस्मिक, परिणामी या लाभ की हानि शामिल है।"],
        ["You use the website and its tools at your own discretion and risk.", "Utilizas el sitio y sus herramientas bajo tu propio criterio y riesgo.", "आप वेबसाइट और उसके टूल का उपयोग अपने विवेक और जोखिम पर करते हैं।"],
        ["11. Indemnification", "11. Indemnización", "11. क्षतिपूर्ति"],
        ["You agree to defend and hold harmless Real IMEI Check and its operators from claims, losses, liabilities, damages, costs, or expenses arising from your unlawful use of the website, violation of these Terms, or violation of another person's rights.", "Aceptas defender y eximir de responsabilidad a Real IMEI Check y sus operadores frente a reclamaciones, pérdidas, responsabilidades, daños, costes o gastos derivados de tu uso ilegal del sitio, del incumplimiento de estos Términos o de la vulneración de derechos ajenos.", "आप वेबसाइट के गैरकानूनी उपयोग, इन नियमों के उल्लंघन या किसी अन्य व्यक्ति के अधिकारों के उल्लंघन से उत्पन्न दावों, हानियों, देनदारियों, क्षति, लागत या खर्च से Real IMEI Check और उसके संचालकों की रक्षा करने और उन्हें हानि से मुक्त रखने पर सहमत हैं।"],
        ["12. Privacy", "12. Privacidad", "12. गोपनीयता"],
        ["Your use of the website is also subject to our Privacy Policy, which explains how information may be handled when you use Real IMEI Check.", "El uso del sitio también está sujeto a nuestra Política de privacidad, que explica cómo puede tratarse la información al utilizar Real IMEI Check.", "वेबसाइट का उपयोग हमारी गोपनीयता नीति के अधीन भी है, जो बताती है कि Real IMEI Check उपयोग करते समय जानकारी कैसे संभाली जा सकती है।"],
        ["Please review the Privacy Policy for additional information about cookies, analytics, advertising, and other data practices.", "Consulta la Política de privacidad para obtener más información sobre cookies, analítica, publicidad y otras prácticas de datos.", "कुकीज़, विश्लेषण, विज्ञापन और अन्य डेटा प्रथाओं की अधिक जानकारी के लिए गोपनीयता नीति देखें।"],
        ["13. Changes to These Terms", "13. Cambios en estos Términos", "13. इन नियमों में बदलाव"],
        ["We may update these Terms and Conditions from time to time.", "Podemos actualizar estos Términos y condiciones periódicamente.", "हम समय-समय पर इन नियमों और शर्तों को अपडेट कर सकते हैं।"],
        ["When changes are made, the “Last updated” date at the beginning of this page will be updated.", "Cuando se realicen cambios, actualizaremos la fecha de «Última actualización» al comienzo de esta página.", "बदलाव होने पर इस पृष्ठ के आरंभ में “अंतिम अपडेट” की तारीख बदल दी जाएगी।"],
        ["Your continued use of the website after changes are published means that you accept the updated Terms, to the extent permitted by applicable law.", "Si sigues utilizando el sitio después de publicar los cambios, aceptas los Términos actualizados en la medida permitida por la ley aplicable.", "बदलाव प्रकाशित होने के बाद वेबसाइट का उपयोग जारी रखने का अर्थ है कि आप लागू कानून द्वारा अनुमत सीमा तक अपडेट किए गए नियम स्वीकार करते हैं।"],
        ["14. Governing Law", "14. Legislación aplicable", "14. लागू कानून"],
        ["These Terms shall be interpreted in accordance with applicable laws and regulations.", "Estos Términos se interpretarán de acuerdo con las leyes y normativas aplicables.", "इन नियमों की व्याख्या लागू कानूनों और विनियमों के अनुसार की जाएगी।"],
        ["Where legally required, disputes relating to the website or these Terms shall be subject to the jurisdiction of the appropriate courts or authorities.", "Cuando la ley lo requiera, las disputas relacionadas con el sitio o estos Términos estarán sujetas a la jurisdicción de los tribunales o autoridades competentes.", "जहाँ कानूनन आवश्यक हो, वेबसाइट या इन नियमों से जुड़े विवाद उपयुक्त न्यायालयों या प्राधिकरणों के अधिकार क्षेत्र में आएँगे।"],
        ["15. Contact", "15. Contacto", "15. संपर्क"],
        ["If you have questions regarding these Terms and Conditions, you may contact us using the contact information provided on the Real IMEI Check website.", "Si tienes preguntas sobre estos Términos y condiciones, puedes escribirnos mediante la información de contacto del sitio web Real IMEI Check.", "इन नियमों और शर्तों के बारे में प्रश्न होने पर आप Real IMEI Check वेबसाइट पर दी गई संपर्क जानकारी से हमसे संपर्क कर सकते हैं।"],
        ["16. Acceptance of These Terms", "16. Aceptación de estos Términos", "16. इन नियमों की स्वीकृति"],
        ["By using Real IMEI Check, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.", "Al utilizar Real IMEI Check, confirmas que has leído, comprendido y aceptado estos Términos y condiciones.", "Real IMEI Check का उपयोग करके आप स्वीकार करते हैं कि आपने इन नियमों और शर्तों को पढ़ा, समझा और स्वीकार किया है।"],
        ["If you do not agree with these Terms, you should discontinue use of the website.", "Si no estás de acuerdo con estos Términos, debes dejar de utilizar el sitio.", "यदि आप इन नियमों से सहमत नहीं हैं, तो आपको वेबसाइट का उपयोग बंद कर देना चाहिए।"],
        ["Read the Real IMEI Check Privacy Policy and learn how information may be handled when you use the website.", "Lee la Política de privacidad de Real IMEI Check y descubre cómo puede tratarse la información al utilizar el sitio web.", "Real IMEI Check की गोपनीयता नीति पढ़ें और जानें कि वेबसाइट का उपयोग करते समय जानकारी कैसे संभाली जा सकती है।"],
        ["Read the Terms and Conditions for using Real IMEI Check and its online IMEI validation tools.", "Lee los Términos y condiciones para utilizar Real IMEI Check y sus herramientas de validación IMEI en línea.", "Real IMEI Check और इसके ऑनलाइन IMEI सत्यापन टूल के उपयोग के नियम और शर्तें पढ़ें।"],
    ].forEach((entry) => add(...entry));

    [
        ["1. Information You Provide", "1. Información que proporcionas", "1. आपके द्वारा दी गई जानकारी"],
        ["Real IMEI Check (“we,” “us,” “our,” or “the website”) respects your privacy and is committed to being transparent about how information may be handled when you use our website.", "Real IMEI Check («nosotros», «nuestro» o «el sitio») respeta tu privacidad y se compromete a ser transparente sobre el tratamiento de la información cuando utilizas el sitio.", "Real IMEI Check (“हम”, “हमारा” या “वेबसाइट”) आपकी गोपनीयता का सम्मान करता है और वेबसाइट उपयोग के दौरान जानकारी के प्रबंधन के बारे में पारदर्शिता बनाए रखने के लिए प्रतिबद्ध है।"],
        ["This Privacy Policy explains what information may be collected when you visit Real IMEI Check, how that information may be used, and how third-party services such as analytics or advertising providers may process information when those services are enabled.", "Esta Política de privacidad explica qué información puede recopilarse al visitar Real IMEI Check, cómo puede utilizarse y cómo pueden tratarla servicios de terceros, como los de analítica o publicidad, si están habilitados.", "यह गोपनीयता नीति बताती है कि Real IMEI Check पर आने पर कौन-सी जानकारी एकत्र की जा सकती है, उसका उपयोग कैसे हो सकता है और विश्लेषण या विज्ञापन जैसी तृतीय-पक्ष सेवाएँ सक्षम होने पर जानकारी कैसे संसाधित कर सकती हैं।"],
        ["Our basic IMEI checking tool does not require you to create an account, provide your name, or provide an email address.", "Nuestra herramienta básica no requiere crear una cuenta ni proporcionar tu nombre o dirección de correo electrónico.", "हमारे बुनियादी IMEI चेकर के लिए खाता बनाने, नाम या ईमेल पता देने की आवश्यकता नहीं है।"],
        ["When you enter an IMEI into the checker, the number is used to perform the requested validation. The basic checker is designed to determine whether the entered IMEI follows the expected format and passes the standard checksum validation.", "Al introducir un IMEI, el número se utiliza para realizar la validación solicitada. El verificador básico determina si tiene el formato esperado y supera la validación estándar de la suma de comprobación.", "चेकर में IMEI दर्ज करने पर नंबर का उपयोग अनुरोधित सत्यापन के लिए किया जाता है। बुनियादी चेकर जाँचता है कि दर्ज IMEI का प्रारूप अपेक्षित है और वह मानक चेकसम सत्यापन में पास होता है।"],
        ["You should avoid submitting information that you do not need to submit for using the website.", "Evita enviar información que no sea necesaria para utilizar el sitio web.", "वेबसाइट उपयोग के लिए अनावश्यक जानकारी भेजने से बचें।"],
        ["2. IMEI Information", "2. Información sobre el IMEI", "2. IMEI जानकारी"],
        ["An IMEI is a device identifier. Depending on how the website is technically configured, information entered into the checker may be processed by your browser or transmitted to our server or service providers.", "Un IMEI identifica un dispositivo. Según la configuración técnica del sitio, la información introducida puede procesarse en tu navegador o transmitirse a nuestro servidor o proveedores de servicios.", "IMEI डिवाइस की पहचान करता है। वेबसाइट के तकनीकी कॉन्फ़िगरेशन के अनुसार, चेकर में दर्ज जानकारी आपके ब्राउज़र में संसाधित हो सकती है या हमारे सर्वर अथवा सेवा प्रदाताओं को भेजी जा सकती है।"],
        ["If our checker processes IMEI numbers entirely within your browser, the validation can be performed locally without sending the entered number to our server. If this changes in the future, this Privacy Policy may be updated to explain the relevant processing.", "Si el verificador procesa el IMEI íntegramente en tu navegador, la validación se realiza localmente sin enviar el número a nuestro servidor. Si esto cambia, podremos actualizar esta Política para explicar el tratamiento correspondiente.", "यदि हमारा चेकर IMEI नंबर को पूरी तरह आपके ब्राउज़र में संसाधित करता है, तो सत्यापन दर्ज नंबर को हमारे सर्वर पर भेजे बिना स्थानीय रूप से किया जा सकता है। भविष्य में यह बदलने पर इस नीति को संबंधित प्रक्रिया समझाने के लिए अपडेट किया जा सकता है।"],
        ["We do not claim that a valid IMEI confirms device ownership, authenticity, warranty status, blacklist status, or network eligibility.", "Un IMEI válido no confirma la propiedad ni autenticidad del dispositivo, su garantía, estado en listas negras o elegibilidad de red.", "वैध IMEI से डिवाइस का स्वामित्व, असलियत, वारंटी स्थिति, ब्लैकलिस्ट स्थिति या नेटवर्क पात्रता की पुष्टि नहीं होती।"],
        ["3. Automatically Collected Information", "3. Información recopilada automáticamente", "3. स्वचालित रूप से एकत्र जानकारी"],
        ["When you visit a website, certain technical information may be automatically processed by your browser, hosting provider, security systems, analytics services, or other infrastructure.", "Al visitar un sitio web, tu navegador, proveedor de alojamiento, sistemas de seguridad, servicios de analítica u otra infraestructura pueden procesar automáticamente cierta información técnica.", "वेबसाइट पर आने पर आपका ब्राउज़र, होस्टिंग प्रदाता, सुरक्षा प्रणालियाँ, विश्लेषण सेवाएँ या अन्य बुनियादी ढाँचा कुछ तकनीकी जानकारी को स्वचालित रूप से संसाधित कर सकते हैं।"],
        ["Depending on the services we use, this information may include:", "Según los servicios que utilicemos, esta información puede incluir:", "हम जिन सेवाओं का उपयोग करते हैं, उनके अनुसार इस जानकारी में शामिल हो सकता है:"],
        ["IP address", "Dirección IP", "IP पता"],
        ["Browser type and version", "Tipo y versión del navegador", "ब्राउज़र का प्रकार और संस्करण"],
        ["Device type", "Tipo de dispositivo", "डिवाइस का प्रकार"],
        ["Operating system", "Sistema operativo", "ऑपरेटिंग सिस्टम"],
        ["Pages visited", "Páginas visitadas", "देखे गए पृष्ठ"],
        ["Approximate usage information", "Información aproximada de uso", "उपयोग की अनुमानित जानकारी"],
        ["Referring website", "Sitio web de referencia", "रेफ़र करने वाली वेबसाइट"],
        ["Date and time of access", "Fecha y hora de acceso", "पहुँच की तारीख और समय"],
        ["Basic technical and diagnostic information", "Información técnica y de diagnóstico básica", "बुनियादी तकनीकी और निदान जानकारी"],
        ["This information may be used to operate, secure, maintain, and improve the website.", "Esta información puede utilizarse para operar, proteger, mantener y mejorar el sitio web.", "इस जानकारी का उपयोग वेबसाइट चलाने, सुरक्षित रखने, बनाए रखने और बेहतर बनाने के लिए किया जा सकता है।"],
        ["4. Cookies", "4. Cookies", "4. कुकीज़"],
        ["Real IMEI Check may use cookies or similar technologies.", "Real IMEI Check puede utilizar cookies o tecnologías similares.", "Real IMEI Check कुकीज़ या समान तकनीकों का उपयोग कर सकता है।"],
        ["Cookies are small files or identifiers that can be stored by your browser when you visit a website. They may be used for essential website functionality, analytics, advertising, security, or remembering certain preferences.", "Las cookies son pequeños archivos o identificadores que el navegador puede guardar al visitar un sitio. Pueden servir para funciones esenciales, analítica, publicidad, seguridad o para recordar preferencias.", "कुकीज़ छोटी फ़ाइलें या पहचानकर्ता हैं जिन्हें वेबसाइट पर जाने पर आपका ब्राउज़र सहेज सकता है। इनका उपयोग आवश्यक सुविधाओं, विश्लेषण, विज्ञापन, सुरक्षा या प्राथमिकताएँ याद रखने के लिए हो सकता है।"],
        ["If advertising or analytics services are added to the website, those third-party providers may use cookies or similar technologies in accordance with their own privacy policies.", "Si se añaden servicios de publicidad o analítica, sus proveedores externos podrán utilizar cookies o tecnologías similares según sus propias políticas de privacidad.", "वेबसाइट पर विज्ञापन या विश्लेषण सेवाएँ जोड़े जाने पर, उनके तृतीय-पक्ष प्रदाता अपनी गोपनीयता नीतियों के अनुसार कुकीज़ या समान तकनीकों का उपयोग कर सकते हैं।"],
        ["You can manage or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.", "Puedes gestionar o desactivar las cookies desde los ajustes del navegador. Desactivar algunas puede afectar ciertas funciones del sitio.", "आप ब्राउज़र सेटिंग्स से कुकीज़ प्रबंधित या अक्षम कर सकते हैं। कुछ कुकीज़ अक्षम करने से वेबसाइट की कुछ सुविधाएँ प्रभावित हो सकती हैं।"],
        ["5. Analytics", "5. Analítica", "5. विश्लेषण"],
        ["We may use analytics services to understand how visitors use Real IMEI Check, such as which pages receive traffic and how users interact with the website.", "Podemos utilizar servicios de analítica para comprender cómo se usa Real IMEI Check, por ejemplo, qué páginas reciben visitas y cómo interactúan los usuarios.", "हम यह समझने के लिए विश्लेषण सेवाओं का उपयोग कर सकते हैं कि लोग Real IMEI Check का उपयोग कैसे करते हैं, जैसे किन पृष्ठों पर ट्रैफ़िक आता है और उपयोगकर्ता वेबसाइट से कैसे जुड़ते हैं।"],
        ["Analytics services may collect technical and usage information according to their own privacy policies.", "Los servicios de analítica pueden recopilar información técnica y de uso conforme a sus propias políticas de privacidad.", "विश्लेषण सेवाएँ अपनी गोपनीयता नीतियों के अनुसार तकनीकी और उपयोग संबंधी जानकारी एकत्र कर सकती हैं।"],
        ["If analytics services are not enabled on the website, this section does not mean that such information is currently being collected.", "Si la analítica no está habilitada, esta sección no significa que dicha información se esté recopilando actualmente.", "यदि वेबसाइट पर विश्लेषण सेवाएँ सक्षम नहीं हैं, तो इस अनुभाग का अर्थ यह नहीं है कि ऐसी जानकारी अभी एकत्र की जा रही है।"],
        ["6. Advertising", "6. Publicidad", "6. विज्ञापन"],
        ["Real IMEI Check may display advertisements in the future, including advertisements provided by third-party advertising networks such as Google AdSense.", "En el futuro, Real IMEI Check podría mostrar anuncios, incluidos los de redes publicitarias externas como Google AdSense.", "भविष्य में Real IMEI Check विज्ञापन दिखा सकता है, जिनमें Google AdSense जैसे तृतीय-पक्ष विज्ञापन नेटवर्क के विज्ञापन भी शामिल हैं।"],
        ["Advertising providers may use cookies, advertising identifiers, IP addresses, device information, or similar technologies to deliver, measure, and improve advertising, subject to their own policies and applicable laws.", "Los proveedores de publicidad pueden utilizar cookies, identificadores publicitarios, direcciones IP, información del dispositivo o tecnologías similares para mostrar, medir y mejorar anuncios, conforme a sus políticas y a la legislación aplicable.", "विज्ञापन प्रदाता अपने नियमों और लागू कानूनों के अधीन विज्ञापन दिखाने, मापने और बेहतर करने के लिए कुकीज़, विज्ञापन पहचानकर्ता, IP पते, डिवाइस जानकारी या समान तकनीकों का उपयोग कर सकते हैं।"],
        ["If advertising is enabled, additional information about applicable advertising technologies and choices may be provided through the website's cookie or privacy controls.", "Si se habilita la publicidad, los controles de cookies o privacidad del sitio podrán ofrecer más información sobre las tecnologías y opciones aplicables.", "विज्ञापन सक्षम होने पर, वेबसाइट के कुकी या गोपनीयता नियंत्रणों में संबंधित विज्ञापन तकनीकों और विकल्पों की अतिरिक्त जानकारी दी जा सकती है।"],
        ["7. Third-Party Services", "7. Servicios de terceros", "7. तृतीय-पक्ष सेवाएँ"],
        ["Our website may use third-party services for hosting, security, analytics, advertising, fonts, content delivery, or other technical purposes.", "El sitio puede utilizar servicios externos para alojamiento, seguridad, analítica, publicidad, fuentes, distribución de contenido u otros fines técnicos.", "हमारी वेबसाइट होस्टिंग, सुरक्षा, विश्लेषण, विज्ञापन, फ़ॉन्ट, सामग्री वितरण या अन्य तकनीकी उद्देश्यों के लिए तृतीय-पक्ष सेवाओं का उपयोग कर सकती है।"],
        ["These providers may process certain technical information as necessary to provide their services. Their processing is governed by their respective privacy policies and terms.", "Estos proveedores pueden procesar cierta información técnica para prestar sus servicios. Dicho tratamiento se rige por sus respectivas políticas y condiciones.", "ये प्रदाता अपनी सेवाएँ देने के लिए आवश्यक तकनीकी जानकारी संसाधित कर सकते हैं। उनका डेटा प्रबंधन उनकी संबंधित गोपनीयता नीतियों और शर्तों के अधीन है।"],
        ["We do not control the privacy practices of third-party services and recommend reviewing their policies when appropriate.", "No controlamos las prácticas de privacidad de terceros y recomendamos consultar sus políticas cuando corresponda.", "हम तृतीय-पक्ष सेवाओं की गोपनीयता प्रथाओं को नियंत्रित नहीं करते और उचित होने पर उनकी नीतियाँ देखने की सलाह देते हैं।"],
        ["8. Data Security", "8. Seguridad de los datos", "8. डेटा सुरक्षा"],
        ["We take reasonable steps to protect the website and information processed through it. However, no website, server, or method of transmitting information over the internet can be guaranteed to be completely secure.", "Tomamos medidas razonables para proteger el sitio y la información que procesa. Sin embargo, no se puede garantizar la seguridad total de un sitio web, servidor o método de transmisión por internet.", "हम वेबसाइट और उसके माध्यम से संसाधित जानकारी की सुरक्षा के लिए उचित कदम उठाते हैं। फिर भी, किसी वेबसाइट, सर्वर या इंटरनेट पर जानकारी भेजने के तरीके की पूर्ण सुरक्षा की गारंटी नहीं दी जा सकती।"],
        ["Users should avoid submitting unnecessary personal or sensitive information through public online tools.", "Evita enviar información personal o sensible innecesaria a través de herramientas públicas en línea.", "सार्वजनिक ऑनलाइन टूल के माध्यम से अनावश्यक निजी या संवेदनशील जानकारी न भेजें।"],
        ["9. Children's Privacy", "9. Privacidad de los menores", "9. बच्चों की गोपनीयता"],
        ["Real IMEI Check is a general-purpose website and is not specifically directed toward collecting personal information from children.", "Real IMEI Check es un sitio de uso general y no está diseñado específicamente para recopilar información personal de menores.", "Real IMEI Check सामान्य उपयोग की वेबसाइट है और विशेष रूप से बच्चों की निजी जानकारी एकत्र करने के लिए नहीं बनाई गई है।"],
        ["We do not knowingly request personal information from children through the basic IMEI checking tool.", "No solicitamos deliberadamente información personal de menores mediante la herramienta básica de IMEI.", "हम बुनियादी IMEI चेकर के माध्यम से जानबूझकर बच्चों से निजी जानकारी नहीं माँगते।"],
        ["10. External Links", "10. Enlaces externos", "10. बाहरी लिंक"],
        ["Our website may contain links to external websites or services. We are not responsible for the privacy practices, content, or security of websites that we do not operate.", "El sitio puede incluir enlaces a páginas o servicios externos. No somos responsables de las prácticas de privacidad, el contenido ni la seguridad de sitios que no gestionamos.", "हमारी वेबसाइट में बाहरी वेबसाइटों या सेवाओं के लिंक हो सकते हैं। जिन वेबसाइटों को हम संचालित नहीं करते, उनकी गोपनीयता प्रथाओं, सामग्री या सुरक्षा के लिए हम ज़िम्मेदार नहीं हैं।"],
        ["We recommend reviewing the privacy policies of external websites before providing information to them.", "Te recomendamos leer las políticas de privacidad de los sitios externos antes de proporcionarles información.", "बाहरी वेबसाइटों को जानकारी देने से पहले उनकी गोपनीयता नीतियाँ पढ़ने की सलाह दी जाती है।"],
        ["11. Changes to This Privacy Policy", "11. Cambios en esta Política de privacidad", "11. इस गोपनीयता नीति में बदलाव"],
        ["We may update this Privacy Policy when our website, services, advertising providers, analytics systems, or legal requirements change.", "Podemos actualizar esta Política de privacidad cuando cambien el sitio, los servicios, los proveedores de publicidad, los sistemas de analítica o los requisitos legales.", "वेबसाइट, सेवाओं, विज्ञापन प्रदाताओं, विश्लेषण प्रणालियों या कानूनी आवश्यकताओं में बदलाव होने पर हम इस गोपनीयता नीति को अपडेट कर सकते हैं।"],
        ["When changes are made, the “Last updated” date at the beginning of this policy will be updated.", "Cuando haya cambios, actualizaremos la fecha de «Última actualización» al comienzo de esta política.", "बदलाव होने पर इस नीति के आरंभ में “अंतिम अपडेट” की तारीख बदल दी जाएगी।"],
        ["12. Contact", "12. Contacto", "12. संपर्क"],
        ["If you have questions about this Privacy Policy or the way information is handled on Real IMEI Check, you can contact us through the contact information provided on our website.", "Si tienes preguntas sobre esta Política de privacidad o el tratamiento de información en Real IMEI Check, puedes contactarnos mediante los datos indicados en el sitio.", "इस गोपनीयता नीति या Real IMEI Check पर जानकारी के प्रबंधन के बारे में प्रश्न हों, तो वेबसाइट पर दी गई संपर्क जानकारी से हमसे संपर्क करें।"],
        ["13. Important Disclaimer", "13. Aviso importante", "13. महत्वपूर्ण अस्वीकरण"],
        ["Real IMEI Check provides informational and validation tools. A successful IMEI checksum validation does not confirm that a device is genuine, legally owned, unlocked, warranty-covered, compatible with a particular carrier, or absent from a lost/stolen-device blacklist.", "Real IMEI Check ofrece herramientas informativas y de validación. Superar la suma de comprobación no confirma que el dispositivo sea auténtico, de propiedad legal, esté desbloqueado, tenga garantía, sea compatible con un operador concreto o no figure en una lista negra de dispositivos perdidos o robados.", "Real IMEI Check जानकारी और सत्यापन टूल प्रदान करता है। IMEI चेकसम में पास होना यह पुष्टि नहीं करता कि डिवाइस असली, कानूनी रूप से स्वामित्व वाला, अनलॉक, वारंटी-कवर, किसी विशेष कैरियर के अनुकूल है या खोए/चोरी हुए डिवाइस की ब्लैकलिस्ट से मुक्त है।"],
        ["Information and results provided by the website should not be treated as a guarantee of a device's condition or legal status.", "La información y los resultados del sitio no deben considerarse una garantía del estado o situación legal del dispositivo.", "वेबसाइट की जानकारी और परिणामों को डिवाइस की स्थिति या कानूनी दर्जे की गारंटी न मानें।"],
        ["By using Real IMEI Check, you acknowledge that you understand the limitations of basic IMEI validation.", "Al utilizar Real IMEI Check, reconoces que comprendes las limitaciones de la validación básica de IMEI.", "Real IMEI Check का उपयोग करके आप स्वीकार करते हैं कि आप बुनियादी IMEI सत्यापन की सीमाएँ समझते हैं।"],
    ].forEach((entry) => add(...entry));

    add(
        "Real IMEI Check - Check IMEI Number Online",
        "Real IMEI Check - Comprueba números IMEI en línea",
        "Real IMEI Check - ऑनलाइन IMEI नंबर जाँचें"
    );
    add(
        "Use Real IMEI Check to validate an IMEI number online using the IMEI checksum. Fast, simple and free.",
        "Usa Real IMEI Check para validar en línea un número IMEI mediante su suma de comprobación. Rápido, sencillo y gratis.",
        "IMEI चेकसम का उपयोग करके ऑनलाइन IMEI नंबर सत्यापित करने के लिए Real IMEI Check का उपयोग करें। तेज़, सरल और निःशुल्क।"
    );
    add(
        "About Us - Real IMEI Check",
        "Sobre nosotros - Real IMEI Check",
        "हमारे बारे में - Real IMEI Check"
    );
    add(
        "Learn about Real IMEI Check, its purpose, and what an IMEI validation can and cannot tell you.",
        "Conoce Real IMEI Check, su propósito y lo que una validación de IMEI puede y no puede decirte.",
        "Real IMEI Check के उद्देश्य और IMEI सत्यापन से क्या पता चलता है तथा क्या नहीं, जानें।"
    );
    add(
        "Your use of the website is also subject to our Privacy Policy, which explains how information may be handled when you use Real IMEI Check.",
        "El uso del sitio también está sujeto a nuestra <a href=\"privacy-policy.html\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad</a>, que explica cómo puede tratarse la información al utilizar Real IMEI Check.",
        "वेबसाइट का उपयोग हमारी <a href=\"privacy-policy.html\" target=\"_blank\" rel=\"noopener noreferrer\">गोपनीयता नीति</a> के अधीन भी है, जो बताती है कि Real IMEI Check उपयोग करते समय जानकारी कैसे संभाली जा सकती है।"
    );
    add(
        "Last updated: October 6, 2026",
        "<strong>Última actualización: 6 de octubre de 2026</strong>",
        "<strong>अंतिम अपडेट: 6 अक्टूबर, 2026</strong>"
    );
    add(
        "A valid checksum does not necessarily mean:",
        "Una suma de comprobación válida <strong>no</strong> significa necesariamente que:",
        "सही चेकसम का यह अर्थ आवश्यक रूप से <strong>नहीं</strong> है कि:"
    );
    add(
        "Still have questions? Contact Us!",
        "¿Aún tienes preguntas? <strong>¡Contáctanos!</strong>",
        "अभी भी सवाल हैं? <strong>हमसे संपर्क करें!</strong>"
    );
    add(
        "Important: Never share your IMEI publicly unless you have a specific reason to do so. Treat it as device information rather than something to post openly online.",
        "<strong>Importante:</strong> No compartas públicamente tu IMEI salvo que tengas un motivo concreto. Trátalo como información del dispositivo y no como algo que debas publicar en internet.",
        "<strong>महत्वपूर्ण:</strong> किसी विशेष कारण के बिना अपना IMEI सार्वजनिक रूप से साझा न करें। इसे डिवाइस की जानकारी मानें, इंटरनेट पर खुले तौर पर पोस्ट करने वाली चीज़ नहीं।"
    );
    add(
        "Remember: An IMEI check is one useful step, not a guarantee that a phone is safe to buy.",
        "<strong>Recuerda:</strong> comprobar el IMEI es un paso útil, no una garantía de que sea seguro comprar el teléfono.",
        "<strong>याद रखें:</strong> IMEI जाँचना एक उपयोगी कदम है, यह फ़ोन की सुरक्षित खरीद की गारंटी नहीं है।"
    );

    const normalize = (text) => text.replace(/\s+/g, " ").trim();
    const languageKey = "imei-checker-language";
    const languageSelect = document.getElementById("languageSelect");
    const menuToggle = document.getElementById("menuToggle");
    const siteMenu = document.getElementById("siteMenu");

    const savedLanguage = localStorage.getItem(languageKey);
    let activeLanguage = ["en", "es", "hi"].includes(savedLanguage) ? savedLanguage : "en";

    function translateSiteText(english) {
        return translations[activeLanguage]?.[normalize(english)] || english;
    }

    function applyLanguage(language) {
        activeLanguage = language;
        document.documentElement.lang = language;
        localStorage.setItem(languageKey, language);

        document.querySelectorAll("h1,h2,h3,p,li,summary,label,button,a,span").forEach((element) => {
            if (element.closest(".language-control") || element.querySelector("img")) return;
            if (element.id === "resultTitle" || element.id === "resultMessage") return;
            if (!element.dataset.englishHtml) {
                element.dataset.englishHtml = element.innerHTML;
                element.dataset.englishText = normalize(element.textContent);
            }
            if (!element.dataset.englishText) return;
            const translated = translations[language]?.[element.dataset.englishText];
            element.innerHTML = language === "en" ? element.dataset.englishHtml : translated || element.dataset.englishHtml;
        });

        document.querySelectorAll("[placeholder]").forEach((element) => {
            if (!element.dataset.englishPlaceholder) element.dataset.englishPlaceholder = element.getAttribute("placeholder");
            element.setAttribute("placeholder", language === "en"
                ? element.dataset.englishPlaceholder
                : translations[language]?.[element.dataset.englishPlaceholder] || element.dataset.englishPlaceholder);
        });

        const title = document.querySelector("title");
        const description = document.querySelector('meta[name="description"]');
        [title, description].forEach((element) => {
            if (!element) return;
            const attribute = element === title ? "textContent" : "content";
            if (!element.dataset.englishValue) element.dataset.englishValue = element[attribute];
            const original = element.dataset.englishValue;
            element[attribute] = language === "en"
                ? original
                : translations[language]?.[normalize(original)] || original;
        });

        document.querySelectorAll("[aria-label]").forEach((element) => {
            if (!element.dataset.englishAriaLabel) element.dataset.englishAriaLabel = element.getAttribute("aria-label");
            const english = element.dataset.englishAriaLabel;
            element.setAttribute("aria-label", language === "en"
                ? english
                : translations[language]?.[english] || english);
        });

        ["resultTitle", "resultMessage"].forEach((id) => {
            const element = document.getElementById(id);
            const english = element?.dataset.resultEnglish;
            if (!english) return;
            element.textContent = language === "en"
                ? english
                : translations[language]?.[english] || english;
        });

        if (languageSelect) languageSelect.value = language;
    }

    window.translateSiteText = translateSiteText;
    window.applySiteLanguage = applyLanguage;

    if (languageSelect) {
        languageSelect.value = activeLanguage;
        languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));
    }

    applyLanguage(activeLanguage);

    if (menuToggle && siteMenu && !document.getElementById("imeiInput")) {
        const setMenuOpen = (isOpen) => {
            siteMenu.classList.toggle("hidden", !isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute("aria-label", translateSiteText(isOpen ? "Close menu" : "Open menu"));
        };

        menuToggle.addEventListener("click", () => {
            setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
        });
        siteMenu.addEventListener("click", (event) => {
            if (event.target.closest("a")) setMenuOpen(false);
        });
        document.addEventListener("click", (event) => {
            if (!event.target.closest(".nav")) setMenuOpen(false);
        });
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
                menuToggle.focus();
            }
        });

        ["light", "dark"].forEach((theme) => {
            const button = document.getElementById(`${theme}ThemeButton`);
            if (!button) return;
            button.addEventListener("click", () => {
                document.documentElement.dataset.theme = theme;
                localStorage.setItem("imei-checker-theme", theme);
                document.querySelectorAll(".menu-theme-option").forEach((option) => {
                    option.setAttribute("aria-pressed", String(option.id === `${theme}ThemeButton`));
                });
                setMenuOpen(false);
            });
        });

        const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
        document.querySelectorAll(".menu-theme-option").forEach((button) => {
            button.setAttribute("aria-pressed", String(button.id === `${currentTheme}ThemeButton`));
        });
    }
})();
