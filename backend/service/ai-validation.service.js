import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

if (!process.env.GEMINI_API_KEY) {
  console.warn('GEMINI_API_KEY nincs beállítva a .env fájlban!');
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Convert photo to generative part for AI input
function fileToGenerativePart(filePath, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(filePath)).toString('base64'),
      mimeType,
    },
  };
}

//MIME type validating based on file extension

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
  };
  return mimeTypes[ext] || 'image/jpeg';
}
// Validating challenge proof with AI
export const validateChallengeWithAI = async (imagePath, challenge) => {
  try {
    const mimeType = getMimeType(imagePath);
    const imagePart = fileToGenerativePart(imagePath, mimeType);

    const prompt = `Te egy kihívás-validáló AI asszisztens vagy a "ChallengeHub" alkalmazásban.

A felhasználó az alábbi kihívást próbálta teljesíteni és képet küldött bizonyítékként.

## Kihívás adatai:
- **Név**: ${challenge.name}
- **Leírás**: ${challenge.description}
- **Kategória**: ${challenge.categories?.name || 'Ismeretlen'}
- **Kategória típusa**: ${challenge.categories?.type || 'Ismeretlen'}

## Feladatod:
Elemezd a képet és döntsd el, hogy a kép RELEVÁNS bizonyítéka-e a kihívás teljesítésének. Légy MEGENGEDŐ de nem naiv – ha a kép nagyjából kapcsolódik a kihíváshoz, fogadd el. Csak akkor utasítsd el, ha teljesen irreleváns.

## Kategória-specifikus útmutató:

### Futás & Cardio:
- Fitness app screenshot (Strava, Nike Run Club, Apple Health, Google Fit, Samsung Health) távolsággal, idővel, GPS útvonallal
- Futóóra/okosóra kijelző fotó edzés adatokkal
- Fotó futás közben (utca, park, futópálya, futópad)
- Lépcsőfutás, ugrálókötelezés, jumping jack közben készült kép

### Erősítő edzés:
- Konditerem/edzőterem fotó (gépek, súlyzók, edzéstér)
- Otthoni edzés közben készült fotó (fekvőtámasz, plank, guggolás, húzódzkodás)
- Fitness tracker/app edzés összesítő
- Street workout park, kaliszteniás gyakorlat

### Jóga & Nyújtás:
- Jóga póz fotó (bármilyen felismerhető póz)
- Nyújtás közbeni kép (otthon, parkban, teremben)
- Jóga matrac/felszerelés fotó edzés közben
- Foam roller használat

### Szabadtéri sportok:
- Sportpálya fotó (kosárlabda, foci, tenisz, röplabda, stb.)
- Sporteszköz használat közben (labda, ütő, frizbi, gördeszka)
- Csapatfotó sport közben/után
- Mászófal, görkorcsolya, stb.

### Kerékpározás:
- Kerékpáros app screenshot (Strava, Komoot, stb.) útvonallal, távval
- Kerékpár fotó úton/természetben
- Szobabicikli kijelző eredménnyel
- Kerékpáros selfie útközben

### Úszás & Vízi sportok:
- Uszoda/medence fotó
- Úszás közben vagy víz mellett készült kép
- Úszószemüveg/felszerelés, strandfotó
- Vízilabda, búvárkodás

### Séta & Túrázás:
- Lépésszámláló app screenshot (Apple Health, Google Fit, Samsung Health)
- Természetfotó séta/túra közben
- Turistajelzés, kilátó, ösvény fotó
- Park, erdő, tó fotó séta közben

###  Meditáció & Mindfulness:
- Meditációs app screenshot (Headspace, Calm, Insight Timer, stb.)
- Nyugodt meditációs helyszín fotó (gyertya, párnák, természet)
- Kézzel írt hálalista, napló, affirmáció fotó
- Screen time app screenshot (digitális detox esetén)

### Egészséges táplálkozás:
- Elkészített étel/ital fotó (reggeli, ebéd, vacsora, smoothie, saláta)
- Főzés közbeni fotó (alapanyagok, edények, tűzhely)
- Meal prep dobozok fotó
- Gyümölcstál, egészséges snack fotó

### Kreativitás & Művészet:
- Rajz, festmény, kézműves alkotás fotó
- Origami, DIY dekoráció, kollázs
- Művészi fotó (napfelkelte, street art, természet, kompozíció)
- Bullet journal oldal, kézírásos idézet, naplóbejegyzés
- Kézzel készült ajándék, gyertya, szappan

### Tanulás & Fejlődés:
- Könyv fotó (olvasás közben, nyitott könyv, könyvborító)
- Jegyzetfüzet/jegyzet fotó, mindmap
- Podcast/videó lejátszó screenshot
- Online kurzus screenshot, tananyag
- Hangszer gyakorlás közben

### Természet & Környezet:
- Növény, virág, fa fotó
- Állat fotó (bármilyen állat a természetben)
- Ültetés, öntözés, kertészkedés közbeni kép
- Összegyűjtött szemét fotó (szemétszedés)
- Madáretető, komposzt, herbárium fotó

### Önfejlesztés & Rutin:
- Ébresztőóra/telefon kijelző fotó (korai kelés)
- Rendezett ágy, asztal, szoba fotó
- To-do lista, heti terv, naptár fotó
- Hideg zuhany fotó (zuhanyfej, víz)
- Vision board, affirmáció lista

### Közösség & Jótékonyság:
- Együtt készített étel/közös vacsora fotó
- Csoportos fotó közös programról
- Kézzel írt levél, ajándék fotó
- Önkéntes munka helyszíne, segítségnyújtás pillanata
- Társasjáték est, közös sport fotó

## Elfogadási szabályok:
**ELFOGADHATÓ**: Bármi ami ésszerűen kapcsolódik a kihíváshoz – NE légy túl szigorú!
A leírásban említett tevékenység bármilyen vizuális bizonyítéka
App screenshotok releváns adatokkal
A tevékenység helyszínéről készült fotó
Előtte-utána fotók
Az eredmény/alkotás fotója

**NEM ELFOGADHATÓ**:
- Teljesen irreleváns kép (pl. macska fotó futás kihíváshoz, ételfotó edzés kihíváshoz)
- Üres, fekete, homályos, értelmezhetetlen képek
- Egyértelmű stock fotók/internetes képek
- A kihíváshoz semmilyen módon nem kapcsolódó tartalom

## FONTOS: Légy bátran megengedő! Ha a kép BÁRMILYEN módon kapcsolódik a kihívás témájához, fogadd el. Inkább adj alacsonyabb confidence-t, de approved verdict-et, mint hogy elutasíts egy valós próbálkozást.

## Válaszolj KIZÁRÓLAG az alábbi JSON formátumban (semmi más szöveg!):
{
  "verdict": "approved" vagy "rejected",
  "confidence": 0-100 közötti szám (mennyire vagy biztos a döntésben),
  "reasoning": "Rövid magyar nyelvű indoklás (max 2-3 mondat)"
}`;

    const modelsToTry = ['gemini-1.5-flash', 'gemini-1.5-flash-8b', 'gemini-2.5-flash', 'gemini-1.0-pro-vision-latest'];
    let lastError = null;

    for (const modelName of modelsToTry) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const text = response.text();

        // JSON cuting out from the response
        const jsonMatch = text.match(/\{[\s\S]*?\}/);
        if (!jsonMatch) {
          console.error(`AI response was not valid JSON from ${modelName}:`, text);
          return {
            verdict: 'rejected',
            confidence: 0,
            reasoning:
              'Az AI nem tudta elemezni a képet. Kérlek próbáld újra egy tisztább fotóval.',
          };
        }

        const parsed = JSON.parse(jsonMatch[0]);
        const confidence = Math.min(100, Math.max(0, Number(parsed.confidence) || 0));

        return {
          verdict: parsed.verdict === 'approved' && confidence >= 80 ? 'approved' : 'rejected',
          confidence: confidence,
          reasoning: 
            (parsed.verdict === 'approved' && confidence < 80)
            ? 'A kép relevánsnak tűnik, de a bizonyosság (80%) alatti. Kérlek tölts fel egy egyértelműbb képet!' 
            : (parsed.reasoning || 'Nem áll rendelkezésre részletes indoklás.'),
        };
      } catch (error) {
        console.warn(`Model ${modelName} failed:`, error.message);
        lastError = error;
        // Continue to fallback model if it's a rate limit or server error
        if (
          error.message?.includes('503') ||
          error.message?.includes('high demand') ||
          error.message?.includes('429') ||
          error.message?.includes('quota') ||
          error.message?.includes('404') ||
          error.message?.includes('not found')
        ) {
          continue; // Try next model
        } else {
          throw error; // Other errors (API key, etc.) abort immediately
        }
      }
    }

    // If both models failed with high demand etc
    throw lastError;
  } catch (error) {
    console.error('AI validation error:', error.message || error);

    // Rate limit or qouta or high demand error
    if (
      error.message?.includes('429') ||
      error.message?.includes('quota') ||
      error.message?.includes('Too Many Requests') ||
      error.message?.includes('503') ||
      error.message?.includes('high demand')
    ) {
      return {
        verdict: 'rejected',
        confidence: 0,
        reasoning:
          'Az AI szolgáltatás jelenleg túlterhelt vagy elérte a limitet. Kérlek, próbáld újra pár perc múlva!',
      };
    }

    // API key error
    if (
      error.message?.includes('API_KEY') ||
      error.message?.includes('API key')
    ) {
      return {
        verdict: 'rejected',
        confidence: 0,
        reasoning:
          'AI szolgáltatás konfigurációs hiba. Kérjük, értesítsd az adminisztrátort.',
      };
    }

    return {
      verdict: 'rejected',
      confidence: 0,
      reasoning:
        'Az AI validálás átmenetileg nem elérhető. Kérlek, próbáld újra később.',
    };
  }
};
