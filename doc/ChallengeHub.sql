-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: localhost
-- Létrehozás ideje: 2026. Már 25. 08:19
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `ChallengeHub`
--
CREATE DATABASE IF NOT EXISTS `ChallengeHub` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `ChallengeHub`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `categories`
--

CREATE TABLE `categories` (
  `uuid` varchar(36) NOT NULL,
  `type` varchar(128) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(36) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `categories`
--

INSERT INTO `categories` (`uuid`, `type`, `name`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
('2b32bcb4-1885-11f1-9435-82f5bdcc9915', 'sport', 'Futás & Cardio', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b33404e-1885-11f1-9435-82f5bdcc9915', 'sport', 'Erősítő edzés', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b33b1aa-1885-11f1-9435-82f5bdcc9915', 'sport', 'Jóga & Nyújtás', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b341e6a-1885-11f1-9435-82f5bdcc9915', 'sport', 'Szabadtéri sportok', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b348a3a-1885-11f1-9435-82f5bdcc9915', 'sport', 'Kerékpározás', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b34f146-1885-11f1-9435-82f5bdcc9915', 'sport', 'Úszás & Vízi sportok', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b355834-1885-11f1-9435-82f5bdcc9915', 'sport', 'Séta & Túrázás', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b35c774-1885-11f1-9435-82f5bdcc9915', 'custom', 'Meditáció & Mindfulness', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b363678-1885-11f1-9435-82f5bdcc9915', 'custom', 'Egészséges táplálkozás', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b369db6-1885-11f1-9435-82f5bdcc9915', 'custom', 'Kreativitás & Művészet', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3708aa-1885-11f1-9435-82f5bdcc9915', 'custom', 'Tanulás & Fejlődés', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b376f52-1885-11f1-9435-82f5bdcc9915', 'custom', 'Természet & Környezet', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b37d622-1885-11f1-9435-82f5bdcc9915', 'custom', 'Önfejlesztés & Rutin', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b383ce8-1885-11f1-9435-82f5bdcc9915', 'custom', 'Közösség & Jótékonyság', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `challenge_submissions`
--

CREATE TABLE `challenge_submissions` (
  `uuid` varchar(36) NOT NULL,
  `user_task_id` varchar(36) NOT NULL,
  `image_path` varchar(500) NOT NULL,
  `ai_verdict` varchar(20) NOT NULL DEFAULT 'pending',
  `ai_confidence` double DEFAULT 0,
  `ai_reasoning` text DEFAULT NULL,
  `submitted_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `page_views`
--

CREATE TABLE `page_views` (
  `uuid` varchar(36) NOT NULL,
  `date` date NOT NULL,
  `count` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `page_views`
--

INSERT INTO `page_views` (`uuid`, `date`, `count`) VALUES
('37c1fd8c-4649-49e1-a303-fff9be4b570d', '2026-03-23', 4),
('5ec38d97-9ade-44fd-a8c0-003ac35e24c0', '2026-03-17', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `shop_items`
--

CREATE TABLE `shop_items` (
  `uuid` varchar(36) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `category` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `value` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `shop_items`
--

INSERT INTO `shop_items` (`uuid`, `name`, `description`, `price`, `category`, `created_at`, `value`) VALUES
('0522e8b6-d783-11f0-b5f8-82f5bdcc9916', 'Arany Keret', 'Egy elegáns, csillogó arany keret a profilképed köré.', 500, 'border', '2025-12-12 18:50:17', 'gold-frame-css-class'),
('052363b8-d783-11f0-b5f8-82f5bdcc9916', 'Neon Keret', 'Futurisztikus neonfényben úszó keret, kék és lila színekben.', 750, 'border', '2025-12-12 18:50:17', 'neon-frame-css-class'),
('05237d62-d783-11f0-b5f8-82f5bdcc9916', 'Gyémánt Keret', 'A legdrágább drágakőből készült keret a legjobbaknak.', 2500, 'border', '2025-12-12 18:50:17', 'diamond-frame-css-class'),
('05237d8a-d783-11f0-b5f8-82f5bdcc9916', 'Természet Keret', 'Indákkal és levelekkel díszített keret a természet kedvelőinek.', 400, 'border', '2025-12-12 18:50:17', 'nature-frame-css-class'),
('05237da8-d783-11f0-b5f8-82f5bdcc9916', 'Cyberpunk Keret', 'Glitch effektes, digitális keret a jövőből.', 1200, 'border', '2025-12-12 18:50:17', 'cyber-frame-css-class'),
('05237dc6-d783-11f0-b5f8-82f5bdcc9916', 'Sötét Lovag Keret', 'Fekete füst és árnyékok a titokzatos felhasználóknak.', 900, 'border', '2025-12-12 18:50:17', 'dark-frame-css-class'),
('05238460-d783-11f0-b5f8-82f5bdcc9916', 'Arany Név', 'A neved arany színben fog ragyogni a chatben és a listákon.', 800, 'name', '2025-12-12 18:50:17', 'gold-name-css-class'),
('05238488-d783-11f0-b5f8-82f5bdcc9916', 'Szivárvány Név', 'Folyamatosan változó színű, animált név.', 2000, 'name', '2025-12-12 18:50:17', 'rainbow-text-animation'),
('052384ba-d783-11f0-b5f8-82f5bdcc9916', 'Jégkék Név', 'Hideg, fagyos effekt a nevedre.', 600, 'name', '2025-12-12 18:50:17', 'ice-blue-name-css-class'),
('40f2cfba-f866-11f0-9da9-82f5bdcc9915', 'Rózsaszín Keret', 'Lányos, pink izzás', 150, 'border', '2026-01-23 15:17:30', 'pink-frame-css-class'),
('40f37410-f866-11f0-9da9-82f5bdcc9915', 'Galaxis Keret', 'Forgó lila-kék-piros színek', 400, 'border', '2026-01-23 15:17:30', 'galaxy-frame-css-class'),
('40f37474-f866-11f0-9da9-82f5bdcc9915', 'Láng Keret', 'Narancs tűz effekt', 300, 'border', '2026-01-23 15:17:30', 'flame-frame-css-class'),
('40f374a6-f866-11f0-9da9-82f5bdcc9915', 'Ezüst Keret', 'Elegáns ezüst ragyogás', 200, 'border', '2026-01-23 15:17:30', 'silver-frame-css-class'),
('40f37cf8-f866-11f0-9da9-82f5bdcc9915', 'Bronz Keret', 'Klasszikus bronz stílus', 100, 'border', '2026-01-23 15:17:30', 'bronze-frame-css-class'),
('40f37d2a-f866-11f0-9da9-82f5bdcc9915', 'Jég Keret', 'Hideg jégkristály fény', 250, 'border', '2026-01-23 15:17:30', 'ice-frame-css-class'),
('40f37d48-f866-11f0-9da9-82f5bdcc9915', 'Tűz Keret', 'Lángoló vörös izzás', 350, 'border', '2026-01-23 15:17:30', 'fire-frame-css-class'),
('40f37d66-f866-11f0-9da9-82f5bdcc9915', 'Méreg Keret', 'Mérgező zöld buborékok', 275, 'border', '2026-01-23 15:17:30', 'poison-frame-css-class'),
('40f37d8e-f866-11f0-9da9-82f5bdcc9915', 'Vér Keret', 'Sötét vérpiros árnyék', 300, 'border', '2026-01-23 15:17:30', 'blood-frame-css-class'),
('40f37dac-f866-11f0-9da9-82f5bdcc9915', 'Holdfény Keret', 'Misztikus holdfény', 350, 'border', '2026-01-23 15:17:30', 'moonlight-frame-css-class'),
('40f37dc0-f866-11f0-9da9-82f5bdcc9915', 'Napfény Keret', 'Ragyogó napsugarak', 300, 'border', '2026-01-23 15:17:30', 'sunlight-frame-css-class'),
('40f37dde-f866-11f0-9da9-82f5bdcc9915', 'Elektromos Keret', 'Villámlás effekt', 450, 'border', '2026-01-23 15:17:30', 'electric-frame-css-class'),
('40f37df2-f866-11f0-9da9-82f5bdcc9915', 'Szivárvány Keret', 'Minden szín egyben', 500, 'border', '2026-01-23 15:17:30', 'rainbow-frame-css-class'),
('40f37e10-f866-11f0-9da9-82f5bdcc9915', 'Rózsaszín Név', 'Lányos pink szín', 120, 'name', '2026-01-23 15:17:30', 'pink-name-css-class'),
('40f37e38-f866-11f0-9da9-82f5bdcc9915', 'Lila Név', 'Elegáns lila árnyalat', 150, 'name', '2026-01-23 15:17:30', 'purple-name-css-class'),
('40f37e4c-f866-11f0-9da9-82f5bdcc9915', 'Narancs Név', 'Vidám narancs szín', 100, 'name', '2026-01-23 15:17:30', 'orange-name-css-class'),
('40f37e60-f866-11f0-9da9-82f5bdcc9915', 'Menta Név', 'Frissítő menta zöld', 175, 'name', '2026-01-23 15:17:30', 'mint-name-css-class'),
('40f37e88-f866-11f0-9da9-82f5bdcc9915', 'Korall Név', 'Meleg korall árnyalat', 150, 'name', '2026-01-23 15:17:30', 'coral-name-css-class'),
('40f37e9c-f866-11f0-9da9-82f5bdcc9915', 'Elektromos Kék Név', 'Villámló kék szín', 300, 'name', '2026-01-23 15:17:30', 'electric-blue-name-css-class'),
('40f37eb0-f866-11f0-9da9-82f5bdcc9915', 'Galaxis Név', 'Forgó kozmikus színek', 400, 'name', '2026-01-23 15:17:30', 'galaxy-name-css-class'),
('40f37eec-f866-11f0-9da9-82f5bdcc9915', 'Méreg Név', 'Toxikus zöld izzás', 250, 'name', '2026-01-23 15:17:30', 'poison-name-css-class'),
('40f37f1e-f866-11f0-9da9-82f5bdcc9915', 'Holdfény Név', 'Ezüstös holdvilág', 300, 'name', '2026-01-23 15:17:30', 'moonlight-name-css-class'),
('40f37f32-f866-11f0-9da9-82f5bdcc9915', 'Napfény Név', 'Aranyló napfény', 250, 'name', '2026-01-23 15:17:30', 'sunlight-name-css-class'),
('40f37f50-f866-11f0-9da9-82f5bdcc9915', 'Vér Név', 'Sötét vérpiros', 275, 'name', '2026-01-23 15:17:30', 'blood-name-css-class'),
('40f37f64-f866-11f0-9da9-82f5bdcc9915', 'Pszichedelikus Név', 'Őrült színváltás', 450, 'name', '2026-01-23 15:17:30', 'psychedelic-name-css-class'),
('40f37f82-f866-11f0-9da9-82f5bdcc9915', 'Platina Név', 'Csúcsminőség platina', 350, 'name', '2026-01-23 15:17:30', 'platinum-name-css-class'),
('40f37f96-f866-11f0-9da9-82f5bdcc9915', 'Bronz Név', 'Klasszikus bronz szín', 80, 'name', '2026-01-23 15:17:30', 'bronze-name-css-class');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tasks`
--

CREATE TABLE `tasks` (
  `uuid` varchar(36) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `xp` int(11) NOT NULL,
  `coin` int(11) NOT NULL,
  `difficulty` varchar(20) NOT NULL DEFAULT 'medium',
  `categories_id` varchar(36) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(36) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `tasks`
--

INSERT INTO `tasks` (`uuid`, `name`, `description`, `xp`, `coin`, `difficulty`, `categories_id`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
('2b3e7aa4-1885-11f1-9435-82f5bdcc9915', 'Fuss 1 km-t', 'Fuss le legalább 1 kilométert és készíts screenshotot a futóalkalmazásodból (Strava, Nike Run Club, stb.).', 20, 10, 'easy', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e8a3a-1885-11f1-9435-82f5bdcc9915', 'Fuss 2 km-t', 'Teljesíts egy 2 km-es futást! Fotózd le a futóappod eredményét a távval és idővel.', 30, 15, 'easy', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e8af8-1885-11f1-9435-82f5bdcc9915', 'Fuss 3 km-t', 'Fuss le 3 kilométert megszakítás nélkül. Készíts screenshotot az eredményről.', 40, 20, 'medium', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e8bac-1885-11f1-9435-82f5bdcc9915', 'Fuss 5 km-t', 'Teljesíts egy 5 km-es futást! Ez komoly teljesítmény – fotózd le az appod összegzését.', 60, 30, 'hard', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e8c4c-1885-11f1-9435-82f5bdcc9915', '15 perc folyamatos futás', 'Fuss legalább 15 percig megszakítás nélkül. Készíts képet a futóalkalmazásod időeredményéről.', 25, 12, 'easy', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e8cd8-1885-11f1-9435-82f5bdcc9915', '30 perc folyamatos futás', 'Fuss 30 percet megállás nélkül! Fotózd le az appod összesítőjét.', 45, 22, 'medium', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e8d46-1885-11f1-9435-82f5bdcc9915', '45 perces hosszú futás', 'Teljesíts egy 45 perces kitartó futást. Készíts screenshotot a futás adatairól.', 60, 30, 'hard', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e8ddc-1885-11f1-9435-82f5bdcc9915', 'Intervall sprint edzés', 'Végezz 5x100 méteres sprinteket pihenőkkel! Fotózd le a futóappod edzésgörbéjét.', 40, 20, 'medium', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e8e4a-1885-11f1-9435-82f5bdcc9915', 'Lépcsőfutás 10 percig', 'Fuss lépcsőn fel-le legalább 10 percig. Készíts fotót a helyszínről vagy a fitnesz appodról.', 35, 18, 'medium', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e8eb8-1885-11f1-9435-82f5bdcc9915', '100 Jumping Jack', 'Csinálj 100 darab Jumping Jacket (csillag ugrás)! Készíts videó screenshotot vagy fotót az edzés közben.', 20, 10, 'easy', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e8f26-1885-11f1-9435-82f5bdcc9915', '200 Jumping Jack', 'Csinálj 200 darab Jumping Jacket! Fotózd le magad edzés közben vagy a fitness appod eredményét.', 35, 18, 'medium', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e8f8a-1885-11f1-9435-82f5bdcc9915', 'Ugrálókötelezés 10 perc', 'Kötelezz legalább 10 percig! Készíts fotót az ugráskötéllel edzés közben.', 35, 18, 'medium', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e8ff8-1885-11f1-9435-82f5bdcc9915', 'Fuss egy új útvonalon', 'Fedezz fel egy számodra új futóútvonalat! Fotózd le a GPS útvonalat az appodban.', 40, 20, 'medium', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e905c-1885-11f1-9435-82f5bdcc9915', 'Hajnali futás', 'Kelj fel korán és fuss napfelkelte előtt vagy közben! Fotózd le a hajnali futás hangulatát és az appod eredményét.', 55, 28, 'hard', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e90f2-1885-11f1-9435-82f5bdcc9915', 'Esti futás a városban', 'Fuss legalább 2 km-t este, sötétedés után. Fotózd le az esti hangulatot és a futásod adatait.', 35, 18, 'medium', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e9156-1885-11f1-9435-82f5bdcc9915', 'Futás esőben', 'Bátran fuss esőben is! Fotózd le magad esőben futás közben vagy utána. Extra pont a bátorságért!', 50, 25, 'hard', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e91c4-1885-11f1-9435-82f5bdcc9915', 'Tempófutás: 1 km 6 perc alatt', 'Fuss le 1 km-t 6 perc alatti tempóban! Screenshotold a km-es tempó eredményt.', 55, 28, 'hard', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3e9232-1885-11f1-9435-82f5bdcc9915', 'Fartlek edzés 20 perc', 'Végezz 20 perces fartlek (változó tempójú) edzést! Fotózd le a változó tempójú edzésgörbét.', 45, 22, 'medium', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3eb578-1885-11f1-9435-82f5bdcc9915', 'Futás baráttal/csoporttal', 'Fuss együtt egy baráttal vagy futócsoporttal! Készíts közös fotót futás közben vagy után.', 35, 18, 'easy', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b3eb622-1885-11f1-9435-82f5bdcc9915', 'Burpee kihívás: 30 darab', 'Csinálj 30 burpee-t! Készíts fotót magadról edzés közben. Ez az egyik legjobb teljes test gyakorlat!', 45, 22, 'hard', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44c2e2-1885-11f1-9435-82f5bdcc9915', '20 fekvőtámasz', 'Csinálj 20 fekvőtámaszt helyes technikával! Készíts fotót magadról edzés közben.', 20, 10, 'easy', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44cd6e-1885-11f1-9435-82f5bdcc9915', '50 fekvőtámasz', 'Csinálj 50 fekvőtámaszt (akár szériákban)! Fotózd le magad edzés közben.', 40, 20, 'medium', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44cf3a-1885-11f1-9435-82f5bdcc9915', '100 fekvőtámasz a nap során', 'Csinálj összesen 100 fekvőtámaszt a nap folyamán! Készíts fotót az utolsó szériáról.', 60, 30, 'hard', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44cfa8-1885-11f1-9435-82f5bdcc9915', '30 guggolás', 'Végezz 30 mély guggolást! Fotózd le a helyes technikát.', 20, 10, 'easy', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d00c-1885-11f1-9435-82f5bdcc9915', '100 guggolás', 'Csinálj 100 guggolást szériákban! Ez komoly láb edzés – fotóval bizonyítsd!', 50, 25, 'hard', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d070-1885-11f1-9435-82f5bdcc9915', '50 felülés', 'Csinálj 50 felülést vagy crunch-ot! Készíts fotót a has edzésről.', 25, 12, 'easy', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d0d4-1885-11f1-9435-82f5bdcc9915', '100 felülés', 'Teljesíts 100 felülést a nap során! Fotózd le magad a gyakorlat közben.', 45, 22, 'medium', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d12e-1885-11f1-9435-82f5bdcc9915', '1 perc plank tartás', 'Tarts ki planket 1 percig! Készíts fotót a plank pozícióról.', 20, 10, 'easy', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d192-1885-11f1-9435-82f5bdcc9915', '2 perc plank tartás', 'Tarts ki planket 2 percig! Fotózd le a pozíciót, akár stopperrel együtt.', 35, 18, 'medium', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d1f6-1885-11f1-9435-82f5bdcc9915', '3 perc plank tartás', 'Tartsd a planket 3 percig! Ez komoly core erő – bizonyítsd fotóval!', 50, 25, 'hard', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d250-1885-11f1-9435-82f5bdcc9915', 'Húzódzkodás: 5 darab', 'Húzódzkodj legalább 5-öt! Készíts fotót a húzódzkodó rúdon.', 35, 18, 'medium', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d2b4-1885-11f1-9435-82f5bdcc9915', 'Húzódzkodás: 10 darab', 'Húzódzkodj 10-et egyben! Fotózd le magad húzódzkodás közben.', 55, 28, 'hard', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d30e-1885-11f1-9435-82f5bdcc9915', '40 kitörés (lunges)', 'Csinálj 40 kitörést (20-20 lábra)! Készíts fotót a gyakorlat közben.', 35, 18, 'medium', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d372-1885-11f1-9435-82f5bdcc9915', 'Konditermi edzés', 'Menj el a konditerembe és végezz legalább 30 perces edzést! Fotózd le magad a teremben.', 45, 22, 'medium', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d3d6-1885-11f1-9435-82f5bdcc9915', 'Otthoni edzés (20 perc)', 'Végezz egy 20 perces otthoni edzést! Fotózd le az edzés helyszínét és magad edzés közben.', 25, 12, 'easy', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d430-1885-11f1-9435-82f5bdcc9915', 'Kar edzés 20 perc', 'Végezz 20 perces kar edzést (bicepsz, tricepsz)! Készíts fotót súlyzókkal vagy edzés közben.', 35, 18, 'medium', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d494-1885-11f1-9435-82f5bdcc9915', 'Láb edzés 20 perc', 'Végezz 20 perces láb edzést (guggolás, kitörés, vádli)! Fotózd le a gyakorlatokat.', 35, 18, 'medium', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d4f8-1885-11f1-9435-82f5bdcc9915', 'Core edzés 15 perc', 'Végezz 15 perces core/has edzést! Csinálj planket, felülést, lábemelést – fotóval igazold!', 30, 15, 'medium', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d552-1885-11f1-9435-82f5bdcc9915', 'Tolódzkodás a padon', 'Csinálj 30 tolódzkodást egy padon vagy széken! Készíts fotót a gyakorlat közben.', 25, 12, 'easy', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d5b6-1885-11f1-9435-82f5bdcc9915', 'Falnál ülés 2 perc', 'Ülj a falhoz támaszkodva (wall sit) 2 percig! Fotózd le a pozíciót stopperrel.', 35, 18, 'medium', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b44d61a-1885-11f1-9435-82f5bdcc9915', 'Kézen állás a falnál', 'Próbálj kézen állni a falnál legalább 15 másodpercig! Készíts fotót a próbálkozásról.', 40, 20, 'hard', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a76c4-1885-11f1-9435-82f5bdcc9915', '10 perces reggeli nyújtás', 'Kezdd a napot 10 perc nyújtással! Készíts fotót magadról nyújtás közben.', 20, 10, 'easy', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a7d5e-1885-11f1-9435-82f5bdcc9915', '15 perces esti nyújtás', 'Zárd a napot 15 perc lazító nyújtással! Fotózd le a nyugodt nyújtás pillanatát.', 25, 12, 'easy', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a7dea-1885-11f1-9435-82f5bdcc9915', '20 perces jóga gyakorlat', 'Végezz egy 20 perces jóga flow-t! Készíts fotót egy jóga pózról.', 35, 18, 'medium', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a7e58-1885-11f1-9435-82f5bdcc9915', '30 perces jóga flow', 'Csinálj egy 30 perces komplett jóga gyakorlatot! Fotózd le a kedvenc pózodat.', 50, 25, 'hard', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a7ec6-1885-11f1-9435-82f5bdcc9915', 'Nap üdvözlet 5x', 'Végezz 5 kör Nap üdvözletet (Sun Salutation)! Készíts fotót az egyik pózról.', 25, 12, 'easy', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a7f2a-1885-11f1-9435-82f5bdcc9915', 'Nap üdvözlet 10x', 'Csinálj 10 kör Nap üdvözletet! Fotózd le a folyamat egy pillanatát.', 40, 20, 'medium', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a7f8e-1885-11f1-9435-82f5bdcc9915', 'Egyensúly gyakorlat: Fa póz', 'Tartsd a Fa pózt (Vrksasana) mindkét lábon 30-30 másodpercig! Készíts fotót.', 25, 12, 'easy', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a7ff2-1885-11f1-9435-82f5bdcc9915', 'Harcos póz sorozat', 'Végezz Harcos I, II és III pózt! Készíts fotót mindhárom pozícióból vagy az egyikből.', 35, 18, 'medium', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a8056-1885-11f1-9435-82f5bdcc9915', 'Hátnyújtó gyakorlatok 15 perc', 'Végezz 15 perc hátnyújtó gyakorlatot (macska-tehén, cobra, gyerek póz)! Fotózd le.', 30, 15, 'medium', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a80ba-1885-11f1-9435-82f5bdcc9915', 'Csípőnyitó nyújtás 15 perc', 'Végezz 15 perc csípőnyitó nyújtást! Készíts fotót a nyújtás közben.', 30, 15, 'medium', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a8114-1885-11f1-9435-82f5bdcc9915', 'Jóga a szabadban', 'Végezz jóga gyakorlatot a szabadban – parkban, kertben! Fotózd le a természetben végzett jógát.', 40, 20, 'medium', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a8178-1885-11f1-9435-82f5bdcc9915', 'Spárgába ülés gyakorlás', 'Gyakorold a spárgát (nem kell teljesen sikerülnie)! Fotózd le a próbálkozást.', 35, 18, 'medium', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a81dc-1885-11f1-9435-82f5bdcc9915', 'Foam roller nyújtás 15 perc', 'Használj foam rollert 15 percig az izmaid lazítására! Fotózd le a rollert és magad.', 30, 15, 'medium', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a8240-1885-11f1-9435-82f5bdcc9915', 'Partner nyújtás', 'Nyújts együtt egy baráttal vagy családtaggal! Készítsetek közös fotót nyújtás közben.', 30, 15, 'medium', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a829a-1885-11f1-9435-82f5bdcc9915', 'Lélegzés és nyújtás kombináció', 'Végezz 10 perc tudatos légzéssel kombinált nyújtást. Fotózd le a nyugodt pillanatot.', 20, 10, 'easy', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4a82fe-1885-11f1-9435-82f5bdcc9915', 'Fejállás vagy állógyertya', 'Próbálj fejállást vagy állógyertyát csinálni (akár fal mellett)! Készíts fotót róla.', 50, 25, 'hard', '2b33b1aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4f839e-1885-11f1-9435-82f5bdcc9915', 'Kosárlabdázz 30 percet', 'Játssz kosárlabdát legalább 30 percig! Készíts fotót a pályán.', 40, 20, 'medium', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4f888a-1885-11f1-9435-82f5bdcc9915', 'Focizz 30 percet', 'Rúgj labdát barátokkal vagy egyedül legalább 30 percig! Fotózd le a focit.', 40, 20, 'medium', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4fa810-1885-11f1-9435-82f5bdcc9915', 'Tollaslabdázz', 'Tollaslabdázz legalább 20 percet! Készíts fotót a játékról.', 25, 12, 'easy', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4fa8ba-1885-11f1-9435-82f5bdcc9915', 'Pingpongozz', 'Játssz pingpongot legalább 20 percet! Fotózd le az asztalt és a játékot.', 25, 12, 'easy', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4fa928-1885-11f1-9435-82f5bdcc9915', 'Frizbi a parkban', 'Dobj frizbit egy baráttal a parkban! Készíts fotót a játékról.', 20, 10, 'easy', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4fa9a0-1885-11f1-9435-82f5bdcc9915', 'Röplabdázz', 'Játssz röplabdát legalább 30 percig! Fotózd le a csapatot vagy a pályát.', 35, 18, 'medium', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4faa0e-1885-11f1-9435-82f5bdcc9915', 'Teniszezz 30 percet', 'Teniszezz legalább 30 percet! Készíts fotót a pályán.', 40, 20, 'medium', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4faa72-1885-11f1-9435-82f5bdcc9915', 'Street workout a parkban', 'Végezz street workout edzést egy szabadtéri fitness parkban! Fotózd le magad az eszközökön.', 50, 25, 'hard', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4faae0-1885-11f1-9435-82f5bdcc9915', 'Gördeszkázz 30 percet', 'Gördeszkázz legalább 30 percig! Készíts fotót a deszkán.', 35, 18, 'medium', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4fab58-1885-11f1-9435-82f5bdcc9915', 'Rollerezz 20 percet', 'Rollerezz legalább 20 percet a szabadban! Fotózd le a rolleres kalandot.', 25, 12, 'easy', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4fabc6-1885-11f1-9435-82f5bdcc9915', 'Labdadobás célba 15 perc', 'Gyakorolj célba dobást (kosárlabda, darts, stb.) 15 percig! Fotózd le a gyakorlást.', 20, 10, 'easy', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4fac2a-1885-11f1-9435-82f5bdcc9915', 'Kötélmászás vagy mászófal', 'Próbálj ki kötélmászást vagy mászófalat! Fotózd le magad mászás közben.', 55, 28, 'hard', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4fac8e-1885-11f1-9435-82f5bdcc9915', 'Futball trükkök gyakorlás', 'Gyakorolj labda trükköket (zsonglőrködés, cselfutás) 20 percig! Készíts fotót.', 30, 15, 'medium', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4facf2-1885-11f1-9435-82f5bdcc9915', 'Szabadtéri jégkorong/görkorcsolya', 'Menj görkorcsolyázni vagy jégkorcsolyázni! Fotózd le magad a pályán.', 40, 20, 'medium', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4fad56-1885-11f1-9435-82f5bdcc9915', 'Ugróiskola a parkban', 'Rajzolj ugróiskolát és játssz legalább 10 percet! Készíts fotót.', 15, 8, 'easy', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b4fadba-1885-11f1-9435-82f5bdcc9915', 'Asztalitenisz bajnokság', 'Szervezz mini asztalitenisz bajnokságot barátokkal! Fotózd le a meccset.', 35, 18, 'medium', '2b341e6a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b546238-1885-11f1-9435-82f5bdcc9915', 'Kerékpározz 3 km-t', 'Tekerd le legalább 3 km-t kerékpárral! Screenshotold a GPS appod eredményét.', 20, 10, 'easy', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5469f4-1885-11f1-9435-82f5bdcc9915', 'Kerékpározz 5 km-t', 'Teljesíts egy 5 km-es bringázást! Fotózd le a kerékpáros appod összesítőjét.', 30, 15, 'easy', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b546a80-1885-11f1-9435-82f5bdcc9915', 'Kerékpározz 10 km-t', 'Tekerd le a 10 km-t! Készíts screenshotot a GPS nyomvonalról.', 45, 22, 'medium', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b546aee-1885-11f1-9435-82f5bdcc9915', 'Kerékpározz 20 km-t', 'Teljesíts egy 20 km-es kerékpártúrát! Fotózd le az útvonalat és az eredményt.', 65, 32, 'hard', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b546b52-1885-11f1-9435-82f5bdcc9915', 'Kerékpározz 30 km-t', 'Tekerd le a 30 km-t! Ez komoly teljesítmény – fotóval bizonyítsd!', 80, 40, 'hard', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b546bb6-1885-11f1-9435-82f5bdcc9915', 'Bringázz munkába/iskolába', 'Használd a kerékpárt közlekedésre ma! Fotózd le a bringádat az úti célnál.', 35, 18, 'medium', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b546c1a-1885-11f1-9435-82f5bdcc9915', 'Kerékpározz egy új útvonalon', 'Fedezz fel egy új kerékpáros útvonalat! Screenshotold a GPS nyomvonalat.', 40, 20, 'medium', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b546c7e-1885-11f1-9435-82f5bdcc9915', '30 perc szobabicikli', 'Tekerj szobabiciklin 30 percig! Fotózd le a gép kijelzőjét az eredménnyel.', 35, 18, 'medium', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b546ce2-1885-11f1-9435-82f5bdcc9915', 'Kerékpáros túra a természetben', 'Menj kerékpáros túrára szép környezetben! Fotózd le a tájat a bringával.', 45, 22, 'medium', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b546d46-1885-11f1-9435-82f5bdcc9915', 'Kerékpározz napfelkeltében', 'Kelj fel korán és bringázz napfelkeltekor! Fotózd le a hajnali hangulatot.', 55, 28, 'hard', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b546daa-1885-11f1-9435-82f5bdcc9915', 'Emelkedő meghódítása', 'Kerékpározz fel egy dombon vagy emelkedőn! Fotózd le a csúcson a kilátást.', 50, 25, 'hard', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b546e0e-1885-11f1-9435-82f5bdcc9915', 'Bringás fotóstúra', 'Kerékpározz és készíts fotókat 5 szép helyről az útvonal mentén!', 35, 18, 'medium', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b546e72-1885-11f1-9435-82f5bdcc9915', 'Lassú tempós bringázás 45 perc', 'Tekerd lazán 45 percig élvezve a tájat! Fotózd le a kellemes bringázást.', 30, 15, 'easy', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b546ecc-1885-11f1-9435-82f5bdcc9915', 'Kerékpáros sprint edzés', 'Végezz 5x200 méteres sprint edzést bringával! Fotózd le a sebességmérő csúcsértékét.', 50, 25, 'hard', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b58e754-1885-11f1-9435-82f5bdcc9915', 'Ússz 15 percet', 'Ússz legalább 15 percig folyamatosan! Készíts fotót az uszodában vagy vízparton.', 30, 15, 'easy', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b58ebf0-1885-11f1-9435-82f5bdcc9915', 'Ússz 30 percet', 'Ússz 30 percig megszakítás nélkül! Fotózd le az uszodát vagy a vizes környezetet.', 45, 22, 'medium', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b590554-1885-11f1-9435-82f5bdcc9915', 'Ússz 500 métert', 'Teljesíts 500 méter úszást! Készíts fotót az uszoda medencéjéről és magadról.', 40, 20, 'medium', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5905f4-1885-11f1-9435-82f5bdcc9915', 'Ússz 1000 métert', 'Ússz le 1 kilométert! Ez komoly állóképesség – fotóval igazold!', 60, 30, 'hard', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b590676-1885-11f1-9435-82f5bdcc9915', 'Ússz 10 hosszt megszakítás nélkül', 'Ússz 10 medencehosszt megállás nélkül! Fotózd le az uszodai teljesítményedet.', 50, 25, 'hard', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5906e4-1885-11f1-9435-82f5bdcc9915', 'Mellúszás 200 méter', 'Ússz mellúszásban 200 métert! Készíts fotót az uszodában.', 25, 12, 'easy', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b590752-1885-11f1-9435-82f5bdcc9915', 'Gyorsúszás 200 méter', 'Ússz gyorsúszásban (kraul) 200 métert! Fotózd le a medencét.', 35, 18, 'medium', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5907c0-1885-11f1-9435-82f5bdcc9915', 'Hátúszás 200 méter', 'Ússz hátúszásban 200 métert! Készíts fotót az uszodai edzésről.', 35, 18, 'medium', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b590824-1885-11f1-9435-82f5bdcc9915', 'Gyakorolj egy új úszásnemet', 'Tanulj vagy gyakorolj egy új úszásnemet (pillangó, hát, stb.)! Fotóval igazold.', 40, 20, 'medium', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b590892-1885-11f1-9435-82f5bdcc9915', 'Aqua fitness edzés', 'Végezz aqua fitness gyakorlatokat a vízben! Készíts fotót az edzésről.', 35, 18, 'medium', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5908f6-1885-11f1-9435-82f5bdcc9915', 'Vízi játékok barátokkal', 'Játsszatok vízi játékokat (vízilabda, búvárkodás, stb.)! Készítsetek közös fotót.', 25, 12, 'easy', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b59095a-1885-11f1-9435-82f5bdcc9915', 'Szabadvízi úszás', 'Ússz szabadtéri vízben (tó, folyó, tenger)! Fotózd le a helyszínt. Vigyázz a biztonságra!', 50, 25, 'hard', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5909be-1885-11f1-9435-82f5bdcc9915', 'Vízilabdázz 20 percet', 'Játssz vízilabdát legalább 20 percig! Fotózd le a játékot.', 40, 20, 'medium', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b590a36-1885-11f1-9435-82f5bdcc9915', 'Búvárkodás vagy snorkeling', 'Búvárkodj vagy snorkelezz! Fotózd le a víz alatti világot vagy magad felszereléssel.', 45, 22, 'medium', '2b34f146-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dbc70-1885-11f1-9435-82f5bdcc9915', 'Sétálj 5000 lépést', 'Tegyél meg 5000 lépést ma! Screenshotold a lépésszámlálód eredményét.', 20, 10, 'easy', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd2b4-1885-11f1-9435-82f5bdcc9915', 'Sétálj 8000 lépést', 'Érj el 8000 lépést ma! Fotózd le a lépésszámláló appot.', 30, 15, 'medium', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd340-1885-11f1-9435-82f5bdcc9915', 'Sétálj 10000 lépést', 'Teljesítsd a 10000 lépéses célt! Screenshotold az eredményt.', 40, 20, 'medium', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd3ae-1885-11f1-9435-82f5bdcc9915', 'Sétálj 15000 lépést', 'Tegyél meg 15000 lépést – ez egy igazán aktív nap! Screenshotold.', 55, 28, 'hard', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd44e-1885-11f1-9435-82f5bdcc9915', '30 perces séta a parkban', 'Sétálj egy parkban legalább 30 percig! Fotózd le a park szépségeit.', 20, 10, 'easy', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd4bc-1885-11f1-9435-82f5bdcc9915', 'Erdei séta 1 óra', 'Sétálj az erdőben legalább 1 órát! Fotóval örökítsd meg a természetet.', 40, 20, 'medium', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd520-1885-11f1-9435-82f5bdcc9915', 'Hegyi túra', 'Menj hegyi túrára! Fotózd le a kilátást a csúcsról vagy az úton.', 60, 30, 'hard', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd584-1885-11f1-9435-82f5bdcc9915', 'Nordic walking 30 perc', 'Végezz Nordic walkinget 30 percig botokkal! Fotózd le magad a botokkal.', 30, 15, 'medium', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd5e8-1885-11f1-9435-82f5bdcc9915', 'Séta kutyával 30 perc', 'Sétáltasd a kutyát legalább 30 percig! Készíts fotót a közös sétáról.', 20, 10, 'easy', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd656-1885-11f1-9435-82f5bdcc9915', 'Esti séta a városban', 'Sétálj este a városban 30 percet! Fotózd le az esti város hangulatát.', 20, 10, 'easy', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd6b0-1885-11f1-9435-82f5bdcc9915', 'Természetjáró túra', 'Menj egy jelzett turistaúton! Fotózd le a jelzést és a tájat.', 40, 20, 'medium', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd714-1885-11f1-9435-82f5bdcc9915', 'Sétálj egy tó körül', 'Kerülj meg egy tavat gyalog! Fotózd le a tavat és a természetet.', 35, 18, 'medium', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd778-1885-11f1-9435-82f5bdcc9915', 'Sétálj esőben', 'Sétálj legalább 20 percet esőben (esernyővel)! Fotózd le az esős hangulatot.', 30, 15, 'medium', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd87c-1885-11f1-9435-82f5bdcc9915', 'Hajnali séta napfelkeltével', 'Kelj fel korán és sétálj napfelkeltekor! Fotózd le a napfelkeltét séta közben.', 40, 20, 'hard', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd8ea-1885-11f1-9435-82f5bdcc9915', 'Fotós séta: 10 szép helyszín', 'Sétálj és fényképezz le 10 szép dolgot az úton! Készítsd el a fotósorozatot.', 30, 15, 'easy', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b5dd958-1885-11f1-9435-82f5bdcc9915', 'Barátokkal közös túra', 'Szervezz közös sétát/túrát barátokkal! Készítsetek csoportos fotót az úton.', 35, 18, 'medium', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62d62e-1885-11f1-9435-82f5bdcc9915', '5 perc meditáció', 'Meditálj 5 percig nyugodt helyen! Készíts fotót a meditációs helyedről vagy az appoddról.', 15, 8, 'easy', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62def8-1885-11f1-9435-82f5bdcc9915', '10 perc meditáció', 'Meditálj 10 percig! Fotózd le a meditációs appod (Headspace, Calm, stb.) eredményét.', 25, 12, 'easy', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62df70-1885-11f1-9435-82f5bdcc9915', '20 perc meditáció', 'Meditálj 20 percig elmélyülten! Screenshotold a meditációs appod összesítőjét.', 40, 20, 'medium', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62dfe8-1885-11f1-9435-82f5bdcc9915', '30 perc meditáció', 'Végezz 30 perces mély meditációt! Fotózd le a békés környezetet és az app eredményt.', 55, 28, 'hard', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62e04c-1885-11f1-9435-82f5bdcc9915', 'Légzőgyakorlat: Box Breathing', 'Végezz Box Breathing légzőgyakorlatot (4-4-4-4) 5 percig! Fotózd le a nyugodt pillanatot.', 20, 10, 'easy', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62e0ba-1885-11f1-9435-82f5bdcc9915', 'Légzőgyakorlat: 4-7-8 technika', 'Gyakorold a 4-7-8 légzéstechnikát 10 percig! Készíts fotót a meditációs helyedről.', 25, 12, 'easy', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62e114-1885-11f1-9435-82f5bdcc9915', 'Tudatos séta 20 perc', 'Sétálj 20 percig teljesen tudatosan, figyelve a környezetedet! Fotózd le amit észreveszel.', 30, 15, 'medium', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62e178-1885-11f1-9435-82f5bdcc9915', 'Hálalista: 10 dolog', 'Írj le 10 dolgot amiért hálás vagy! Készíts fotót a listáról.', 25, 12, 'easy', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62e1dc-1885-11f1-9435-82f5bdcc9915', 'Body scan meditáció', 'Végezz body scan meditációt 15 percig! Fotózd le a nyugodt pozíciót.', 30, 15, 'medium', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62e236-1885-11f1-9435-82f5bdcc9915', 'Meditálj a természetben', 'Menj ki a természetbe és meditálj 15 percig! Fotózd le a helyszínt.', 40, 20, 'medium', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62e29a-1885-11f1-9435-82f5bdcc9915', 'Reggeli meditáció napfelkeltével', 'Meditálj napfelkeltekor a szabadban! Fotózd le a napfelkeltét.', 50, 25, 'hard', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62e2fe-1885-11f1-9435-82f5bdcc9915', 'Journaling: napi reflexió', 'Írj 1 oldalnyi napi reflexiót a naplódba! Fotózd le a bejegyzést.', 25, 12, 'easy', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62e358-1885-11f1-9435-82f5bdcc9915', 'Mantra meditáció 15 perc', 'Ismételj egy mantrát 15 percig meditáció közben! Fotózd le a meditáló helyed.', 35, 18, 'medium', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62e3bc-1885-11f1-9435-82f5bdcc9915', 'Digitális detox 2 óra', 'Tölts 2 órát képernyő nélkül! Fotózd le a képernyőidő appod eredményét utána.', 45, 22, 'hard', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62e420-1885-11f1-9435-82f5bdcc9915', 'Vizualizációs gyakorlat', 'Végezz 10 perces vizualizációs meditációt (képzeld el a céljaidat)! Fotózd le a helyszínt.', 25, 12, 'medium', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b62e484-1885-11f1-9435-82f5bdcc9915', 'Tudatos evés gyakorlat', 'Egyél meg egy étkezést teljesen tudatosan, lassan, élvezve! Fotózd le az ételt és a pillanatot.', 25, 12, 'easy', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b682818-1885-11f1-9435-82f5bdcc9915', 'Készíts egészséges reggelit', 'Készíts egy tápláló, egészséges reggelit! Fotózd le a kész ételt.', 20, 10, 'easy', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6830f6-1885-11f1-9435-82f5bdcc9915', 'Készíts zabkását gyümölcsökkel', 'Készíts zabkását friss gyümölcsökkel és magvakkal! Fotózd le a tálat.', 20, 10, 'easy', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b683182-1885-11f1-9435-82f5bdcc9915', 'Készíts smoothie-t', 'Mixelj egy egészséges smoothie-t! Fotózd le a kész italt az összetevőkkel.', 20, 10, 'easy', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6831fa-1885-11f1-9435-82f5bdcc9915', 'Készíts protein shake-et', 'Készíts protein shake-et edzés után! Fotózd le az italt.', 15, 8, 'easy', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b68325e-1885-11f1-9435-82f5bdcc9915', 'Készíts friss salátát', 'Készíts egy színes, friss salátát! Fotózd le a kész tálat.', 20, 10, 'easy', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6832c2-1885-11f1-9435-82f5bdcc9915', 'Készíts gyümölcstálat', 'Készíts egy szép gyümölcstálat legalább 4 féle gyümölcsből! Fotózd le.', 15, 8, 'easy', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b68331c-1885-11f1-9435-82f5bdcc9915', 'Főzz egészséges ebédet', 'Főzz egy komplett egészséges ebédet! Fotózd le a kész ételt.', 35, 18, 'medium', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b683380-1885-11f1-9435-82f5bdcc9915', 'Főzz egészséges vacsorát', 'Készíts egészséges vacsorát (fehérje + zöldség + szénhidrát)! Fotózd le.', 35, 18, 'medium', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6833ee-1885-11f1-9435-82f5bdcc9915', 'Készíts wrap-et', 'Készíts egészséges tortilla wrap-et! Fotózd le a kész tekercseket.', 25, 12, 'easy', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b683448-1885-11f1-9435-82f5bdcc9915', 'Készíts avokádós pirítóst', 'Készíts avokádós pirítóst tojással vagy zöldségekkel! Fotózd le a kész ételt.', 20, 10, 'easy', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6834ac-1885-11f1-9435-82f5bdcc9915', 'Készíts házi granolát', 'Készíts házi granolát zabpehelyből, mézből és magvakból! Fotózd le az elkészítés folyamatát.', 30, 15, 'medium', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b683510-1885-11f1-9435-82f5bdcc9915', 'Készíts házi levest', 'Főzz házi levest friss alapanyagokból! Fotózd le a kész levest.', 35, 18, 'medium', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b68356a-1885-11f1-9435-82f5bdcc9915', 'Készíts egészséges snacket', 'Készíts egészséges nassolnivalót (müzli szelet, energia golyó, stb.)! Fotózd le.', 25, 12, 'easy', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6835c4-1885-11f1-9435-82f5bdcc9915', 'Próbálj ki új egészséges receptet', 'Keress és próbálj ki egy számodra új egészséges receptet! Fotózd le az eredményt.', 40, 20, 'medium', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b683628-1885-11f1-9435-82f5bdcc9915', 'Meal prep a hétre', 'Készíts elő egészséges ételeket a következő napokra! Fotózd le a dobozos előkészítést.', 55, 28, 'hard', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b68368c-1885-11f1-9435-82f5bdcc9915', 'Készíts zöld turmixot', 'Készíts spenótos/uborkás zöld turmixot! Fotózd le a zöld italt.', 20, 10, 'easy', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b683b1e-1885-11f1-9435-82f5bdcc9915', 'Készíts sushi-t otthon', 'Próbálj meg sushi-t készíteni otthon! Fotózd le a kész tekercseket.', 50, 25, 'hard', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b683b8c-1885-11f1-9435-82f5bdcc9915', 'Készíts egészséges desszertet', 'Készíts cukormentes vagy egészséges desszertet! Fotózd le az édességet.', 35, 18, 'medium', '2b363678-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6d9cbc-1885-11f1-9435-82f5bdcc9915', 'Rajzolj le valamit', 'Rajzolj le bármit amit látsz a környezetedben! Fotózd le a kész rajzot.', 20, 10, 'easy', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da1c6-1885-11f1-9435-82f5bdcc9915', 'Rajzolj portrét', 'Rajzolj portrét magadról vagy valaki másról! Fotózd le a kész művet.', 40, 20, 'hard', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da270-1885-11f1-9435-82f5bdcc9915', 'Rajzolj mandalát', 'Rajzolj egy részletes mandalát! Fotózd le a kész mintát.', 30, 15, 'medium', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da2de-1885-11f1-9435-82f5bdcc9915', 'Fess egy képet', 'Fess egy képet bármilyen technikával (akvarell, akril, stb.)! Fotózd le a kész festményt.', 40, 20, 'medium', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da356-1885-11f1-9435-82f5bdcc9915', 'Fess vízfestékkel', 'Készíts vízfestményt! Fotózd le a kész alkotást és a festékeket.', 35, 18, 'medium', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da3ba-1885-11f1-9435-82f5bdcc9915', 'Készíts origamit', 'Hajtogass legalább 3 origami figurát! Fotózd le a kész origamikat.', 25, 12, 'medium', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da41e-1885-11f1-9435-82f5bdcc9915', 'Készíts kollázt', 'Készíts kollázt újságokból, fotókból vagy digitálisan! Fotózd le a kész művet.', 30, 15, 'medium', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da482-1885-11f1-9435-82f5bdcc9915', 'Fotózd le a naplementét', 'Készíts szép fotót a naplementéről! Mutasd meg a legjobb képedet.', 25, 12, 'easy', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da4e6-1885-11f1-9435-82f5bdcc9915', 'Fényképezd le a kedvenc helyed', 'Fotózd le a kedvenc helyedet a városban, otthon vagy a természetben!', 20, 10, 'easy', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da54a-1885-11f1-9435-82f5bdcc9915', '10 szép fotó a környezetből', 'Készíts 10 esztétikus fotót a környezetedből! Mutasd a legjobbat.', 25, 12, 'easy', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da5ae-1885-11f1-9435-82f5bdcc9915', 'Készíts DIY dekorációt', 'Készíts házilag egy dekorációt (koszorú, mécsestartó, stb.)! Fotózd le.', 35, 18, 'medium', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da608-1885-11f1-9435-82f5bdcc9915', 'Készíts kézműves ajándékot', 'Készíts kézzel egy ajándékot valakinek! Fotózd le a kész ajándékot.', 50, 25, 'hard', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da66c-1885-11f1-9435-82f5bdcc9915', 'Készíts bullet journal oldalt', 'Tervezz és készíts egy szép bullet journal oldalt! Fotózd le a kész lapot.', 30, 15, 'medium', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da6d0-1885-11f1-9435-82f5bdcc9915', 'Street art fotósorozat', 'Keress és fotózz le legalább 5 street art alkotást a városban!', 25, 12, 'easy', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da734-1885-11f1-9435-82f5bdcc9915', 'Készíts kézírásos idézet lapot', 'Írj le szépen egy motiváló idézetet és díszítsd ki! Fotózd le.', 20, 10, 'easy', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da78e-1885-11f1-9435-82f5bdcc9915', 'Készíts fotósorozatot egy témáról', 'Válassz egy témát (szín, forma, anyag) és készíts 5 fotót róla!', 30, 15, 'medium', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da7f2-1885-11f1-9435-82f5bdcc9915', 'Készíts tárgyakból művészetet', 'Alkoss művészi kompozíciót hétköznapi tárgyakból! Fotózd le a kész alkotást.', 35, 18, 'medium', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b6da856-1885-11f1-9435-82f5bdcc9915', 'Készíts gyertyát vagy szappant', 'Készíts házilag gyertyát vagy szappant! Fotózd le az alkotás folyamatát és az eredményt.', 50, 25, 'hard', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b73211e-1885-11f1-9435-82f5bdcc9915', 'Olvass 20 percet', 'Olvass egy könyvből legalább 20 percig! Fotózd le a könyvet és az olvasás pillanatát.', 20, 10, 'easy', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b732c72-1885-11f1-9435-82f5bdcc9915', 'Olvass 30 percet', 'Olvass 30 percig elmélyülten! Fotózd le a könyvet és az oldalt ahol tartasz.', 25, 12, 'easy', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b732d08-1885-11f1-9435-82f5bdcc9915', 'Olvass 1 órát', 'Olvass egy teljes órát! Fotózd le a könyvet az olvasás helyszínével.', 40, 20, 'medium', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b732d8a-1885-11f1-9435-82f5bdcc9915', 'Tanulj 5 új szót idegen nyelven', 'Tanulj meg 5 új szót egy idegen nyelven és írd le őket! Fotózd le a jegyzeted.', 25, 12, 'easy', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b732df8-1885-11f1-9435-82f5bdcc9915', 'Hallgass meg egy podcastet', 'Hallgass meg egy teljes podcast epizódot! Screenshotold a lejátszót.', 20, 10, 'easy', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b732e66-1885-11f1-9435-82f5bdcc9915', 'Nézz meg egy TED Talk-ot', 'Nézz meg egy TED Talk-ot és foglald össze 3 mondatban! Fotózd le a jegyzeted.', 25, 12, 'easy', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b732eca-1885-11f1-9435-82f5bdcc9915', 'Írj naplóbejegyzést', 'Írj legalább fél oldal naplóbejegyzést a napodról! Fotózd le a bejegyzést.', 20, 10, 'easy', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b732f2e-1885-11f1-9435-82f5bdcc9915', 'Készíts jegyzeteket egy témáról', 'Tanulj egy témáról és készíts részletes jegyzeteket! Fotózd le a jegyzetfüzeted.', 35, 18, 'medium', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b732fc4-1885-11f1-9435-82f5bdcc9915', 'Fejezz be egy online kurzus leckét', 'Teljesíts egy leckét egy online kurzusból! Screenshotold a befejezett leckét.', 35, 18, 'medium', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b733028-1885-11f1-9435-82f5bdcc9915', 'Gyakorolj hangszeren 30 percet', 'Gyakorolj valamilyen hangszeren 30 percig! Fotózd le magad gyakorlás közben.', 35, 18, 'medium', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b733096-1885-11f1-9435-82f5bdcc9915', 'Nézz meg egy dokumentumfilmet', 'Nézz meg egy dokumentumfilmet! Screenshotold a filmet és írj róla 2 mondatot.', 30, 15, 'medium', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL);
INSERT INTO `tasks` (`uuid`, `name`, `description`, `xp`, `coin`, `difficulty`, `categories_id`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
('2b7330fa-1885-11f1-9435-82f5bdcc9915', 'Tanulj programozni 30 percet', 'Kódolj vagy tanulj programozni 30 percig! Screenshotold a kódod vagy a tananyagot.', 35, 18, 'medium', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b73315e-1885-11f1-9435-82f5bdcc9915', 'Készíts mindmap-et', 'Készíts gondolattérképet (mindmap) egy témáról! Fotózd le a kész térképet.', 25, 12, 'easy', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7331c2-1885-11f1-9435-82f5bdcc9915', 'Olvass el egy tudományos cikket', 'Olvass el egy szakmai/tudományos cikket és jelöld ki a fontos részeket! Fotózd le.', 30, 15, 'medium', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b73321c-1885-11f1-9435-82f5bdcc9915', 'Tanulj egy új receptet és készítsd el', 'Keress egy új receptet, tanuld meg és készítsd el! Fotózd le a kész ételt.', 40, 20, 'medium', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b733280-1885-11f1-9435-82f5bdcc9915', 'Készíts összefoglalót egy könyvről', 'Írj 1 oldalas összefoglalót egy könyvről amit olvastál! Fotózd le az összefoglalót.', 40, 20, 'hard', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b785bc0-1885-11f1-9435-82f5bdcc9915', 'Öntözd meg a növényeid', 'Gondozd a növényeidet – öntözd meg őket! Fotózd le a növényeket öntözés közben.', 15, 8, 'easy', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b78670a-1885-11f1-9435-82f5bdcc9915', 'Ültess el egy növényt', 'Ültess el egy új növényt (virág, fűszer, zöldség)! Fotózd le az ültetés eredményét.', 35, 18, 'medium', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7867be-1885-11f1-9435-82f5bdcc9915', 'Fotózz le 5 különböző virágot', 'Keress és fotózz le 5 különböző virágot a környezetedben! Mutasd a legszebbet.', 20, 10, 'easy', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b786840-1885-11f1-9435-82f5bdcc9915', 'Fényképezz le egy állatot', 'Fotózz le egy állatot a természetben (madár, mókus, rovar, stb.)!', 20, 10, 'easy', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7868ae-1885-11f1-9435-82f5bdcc9915', 'Szedj szemetet 15 percig', 'Szedj össze szemetet a környékeden 15 percig! Fotózd le az összegyűjtött szemetet.', 35, 18, 'medium', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b78691c-1885-11f1-9435-82f5bdcc9915', 'Szedj szemetet 30 percig', 'Végezz 30 perces szemétszedést a környéken! Fotózd le az eredményt – minden számít!', 50, 25, 'hard', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b78698a-1885-11f1-9435-82f5bdcc9915', 'Sétálj az erdőben és figyelj', 'Sétálj az erdőben és figyelj a hangokra, illatokra! Fotózd le a legszebb részletet.', 20, 10, 'easy', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7869f8-1885-11f1-9435-82f5bdcc9915', 'Készíts falevél gyűjteményt', 'Gyűjts különböző faleveleket és rendezd el szépen! Fotózd le a kompozíciót.', 25, 12, 'medium', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b786a5c-1885-11f1-9435-82f5bdcc9915', 'Készíts madáretetőt', 'Készíts egyszerű madáretetőt és helyezd ki! Fotózd le a kész etetőt.', 45, 22, 'hard', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b786ab6-1885-11f1-9435-82f5bdcc9915', 'Fotózd le a kedvenc fádat', 'Keresd meg a kedvenc fádat a környéken és készíts róla szép fotót!', 15, 8, 'easy', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b786b1a-1885-11f1-9435-82f5bdcc9915', 'Készíts természetes koszorút', 'Készíts koszorút természetes anyagokból (ágak, levelek, virágok)! Fotózd le.', 40, 20, 'medium', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b786c78-1885-11f1-9435-82f5bdcc9915', 'Komposztálj', 'Komposztáld a konyhai hulladékot! Fotózd le a komposztot vagy a komposztálás folyamatát.', 30, 15, 'medium', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b786cf0-1885-11f1-9435-82f5bdcc9915', 'Figyelj meg egy állatot 10 percig', 'Ülj le a természetben és figyelj meg egy állatot 10 percig! Fotózd le amit látsz.', 25, 12, 'easy', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b786d72-1885-11f1-9435-82f5bdcc9915', 'Készíts herbáriumot', 'Gyűjts növényeket és préseld ki őket herbárium készítéséhez! Fotózd le a gyűjteményt.', 40, 20, 'medium', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b786dea-1885-11f1-9435-82f5bdcc9915', 'Készíts természetfotó sorozatot', 'Készíts 5 természetfotót különböző témákban (fa, víz, ég, virág, állat)!', 25, 12, 'easy', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b786e62-1885-11f1-9435-82f5bdcc9915', 'Ültess fát', 'Ültess el egy fát vagy cserjét! Fotózd le az ültetés pillanatát. Ez a legjobb amit tehetsz!', 60, 30, 'hard', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7daf4e-1885-11f1-9435-82f5bdcc9915', 'Kelj fel 6:00-kor', 'Kelj fel reggel 6 órakor! Fotózd le az ébresztőórát/telefon kijelzőjét 6:00-kor.', 30, 15, 'medium', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7dd578-1885-11f1-9435-82f5bdcc9915', 'Kelj fel 5:30-kor', 'Kelj fel hajnali 5:30-kor! Fotózd le az órát bizonyítékként – ez igazi fegyelem!', 45, 22, 'hard', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7dd640-1885-11f1-9435-82f5bdcc9915', 'Vesd be az ágyad', 'Vesd be szépen az ágyad reggel! Fotózd le a szépen bevetett ágyat.', 10, 5, 'easy', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7dd6c2-1885-11f1-9435-82f5bdcc9915', 'Rendezd el az asztalodat', 'Rendezd el a munka/tanulóasztalodat! Készíts előtte-utána fotót.', 20, 10, 'easy', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7de108-1885-11f1-9435-82f5bdcc9915', 'Takarítsd ki a szobádat', 'Takaríts ki alaposan a szobádban! Készíts fotót a tiszta, rendezett szobáról.', 35, 18, 'medium', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7de1f8-1885-11f1-9435-82f5bdcc9915', 'Takarítsd ki a konyhát', 'Takarítsd ki a konyhát alaposan! Fotózd le a ragyogó konyhát.', 30, 15, 'medium', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7de284-1885-11f1-9435-82f5bdcc9915', 'Tervezd meg a holnapot', 'Tervezd meg részletesen a holnapi napodat! Fotózd le a terveid (naptár, lista).', 20, 10, 'easy', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7deb80-1885-11f1-9435-82f5bdcc9915', 'Írj to-do listát', 'Készíts to-do listát a napi feladataidról és pipáld ki amit teljesítesz! Fotózd le.', 20, 10, 'easy', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7dec16-1885-11f1-9435-82f5bdcc9915', '1 óra digitális detox', 'Tölts 1 órát telefon és képernyő nélkül! Fotózd le a screen time appod \"előtte\" állapotát.', 30, 15, 'medium', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7dec84-1885-11f1-9435-82f5bdcc9915', '3 óra digitális detox', 'Tölts 3 órát képernyő nélkül! Fotózd le a screen time eredményed utána.', 50, 25, 'hard', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7decf2-1885-11f1-9435-82f5bdcc9915', 'Menj aludni 22:00 előtt', 'Feküdj le 22:00 előtt! Fotózd le az órát lefekvés előtt.', 25, 12, 'medium', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7ded60-1885-11f1-9435-82f5bdcc9915', 'Készíts vision board-ot', 'Készíts vision board-ot a céljaidról (digitálisan vagy papíron)! Fotózd le.', 35, 18, 'medium', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7dedc4-1885-11f1-9435-82f5bdcc9915', 'Rendezd ki a ruhatáradat', 'Rendezd át és rendszerezd a ruhásszekrényed! Készíts fotót az eredményről.', 35, 18, 'medium', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7dee3c-1885-11f1-9435-82f5bdcc9915', 'Írj pozitív affirmációkat', 'Írj le 10 pozitív affirmációt magadról és olvasd fel hangosan! Fotózd le a listát.', 20, 10, 'easy', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7deeaa-1885-11f1-9435-82f5bdcc9915', 'Reggeli rutin kialakítása', 'Végezz el egy komplett reggeli rutint (ágytakarás, nyújtás, reggeli)! Fotózd le a lépéseket.', 30, 15, 'medium', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7def0e-1885-11f1-9435-82f5bdcc9915', 'Készíts heti tervet', 'Tervezd meg a teljes jövő heted! Fotózd le a részletes heti tervet.', 35, 18, 'medium', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7def72-1885-11f1-9435-82f5bdcc9915', 'Rendezd a telefonod', 'Rendezd el a telefon appjaidat és törölj felesleges fotókat/appokat! Screenshotold az eredményt.', 25, 12, 'easy', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b7defd6-1885-11f1-9435-82f5bdcc9915', 'Csinálj hideg zuhanyt', 'Vegyél hideg zuhanyt legalább 30 másodpercig! Fotózd le a zuhanyt (nem kell benne lenned!).', 35, 18, 'medium', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b8307e6-1885-11f1-9435-82f5bdcc9915', 'Készíts meglepetés levelet', 'Írj egy kézzel írt levelet valakinek akit szeretsz! Fotózd le a levelet.', 25, 12, 'easy', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b830868-1885-11f1-9435-82f5bdcc9915', 'Segíts a bevásárlásban', 'Segíts egy családtagnak vagy szomszédnak a bevásárlásban! Fotózd le a szatyros közös munkát.', 30, 15, 'medium', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b8308d6-1885-11f1-9435-82f5bdcc9915', 'Ajándékozz meg valakit', 'Készíts vagy vegyél egy apró ajándékot valakinek! Fotózd le a meglepetést.', 30, 15, 'medium', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b830944-1885-11f1-9435-82f5bdcc9915', 'Szervezz közös programot', 'Szervezz egy közös programot (séta, játék, főzés) barátokkal! Készítsetek közös fotót.', 40, 20, 'medium', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b8309a8-1885-11f1-9435-82f5bdcc9915', 'Önkénteskedj', 'Végezz önkéntes munkát (állatsimogató, étkeztetés, stb.)! Fotózd le a helyszínt.', 60, 30, 'hard', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b830a0c-1885-11f1-9435-82f5bdcc9915', 'Taníts meg valakinek valamit', 'Taníts meg valakinek egy új dolgot (recept, sport, tananyag)! Fotózd le a tanítás pillanatát.', 35, 18, 'medium', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b830a70-1885-11f1-9435-82f5bdcc9915', 'Közös főzés barátokkal', 'Főzzetek együtt barátokkal! Készítsetek közös fotót a konyhában.', 35, 18, 'medium', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b830ad4-1885-11f1-9435-82f5bdcc9915', 'Közös sportolás', 'Sportoljatok együtt barátokkal (futás, labdajáték, edzés)! Készítsetek csapatfotót.', 30, 15, 'medium', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b830b38-1885-11f1-9435-82f5bdcc9915', 'Segíts idős embernek', 'Segíts egy idős szomszédodnak vagy családtagodnak valamiben! Fotózd le a segítségnyújtást.', 40, 20, 'medium', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b830b9c-1885-11f1-9435-82f5bdcc9915', 'Készíts közös művészeti alkotást', 'Alkossatok együtt barátokkal (rajz, festés, kézműves)! Fotózd le a közös művet.', 35, 18, 'medium', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b830c3c-1885-11f1-9435-82f5bdcc9915', 'Közös takarítás a környéken', 'Szervezzetek közös szemétszedést a környéken! Fotózd le a csapatot munka közben.', 50, 25, 'hard', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b830caa-1885-11f1-9435-82f5bdcc9915', 'Adj enni egy hajléktalan állatnak', 'Vigyél enni vagy innivalót egy kóbor állatnak! Fotózd le az állatot evés közben.', 30, 15, 'easy', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL),
('2b830d0e-1885-11f1-9435-82f5bdcc9915', 'Közös játékest szervezés', 'Szervezz társasjáték vagy kvíz estét barátokkal! Fotózd le a csapatot játék közben.', 30, 15, 'medium', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-05 12:19:26', '9a1f2856-5b23-4e96-8245-887f92db2f8e', NULL, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tickets`
--

CREATE TABLE `tickets` (
  `uuid` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `type` varchar(50) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `priority` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'open',
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `uuid` varchar(36) NOT NULL,
  `username` varchar(128) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `xp` int(11) NOT NULL,
  `coin` int(11) NOT NULL,
  `admin` int(11) NOT NULL,
  `registered_at` datetime NOT NULL DEFAULT current_timestamp(),
  `onboarding_completed` tinyint(1) NOT NULL DEFAULT 0,
  `activity_level` varchar(20) DEFAULT NULL,
  `current_streak` int(11) NOT NULL DEFAULT 0,
  `last_completed_at` datetime DEFAULT NULL,
  `longest_streak` int(11) NOT NULL DEFAULT 0,
  `active_border_id` varchar(36) DEFAULT NULL,
  `active_name_color_id` varchar(36) DEFAULT NULL,
  `is_banned` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`uuid`, `username`, `email`, `password`, `xp`, `coin`, `admin`, `registered_at`, `onboarding_completed`, `activity_level`, `current_streak`, `last_completed_at`, `longest_streak`, `active_border_id`, `active_name_color_id`, `is_banned`) VALUES
('0c68f9fb-613f-4224-9953-8a03dbd876ba', 'székelyKöllő', 'kolloke@gmail.com', '$2b$12$93ti/kRnqahIAGnba2F5ZOsLVIFTlGllZwcEuAU4dK8JSy7zXpFX.', 965, 328, 0, '2026-03-17 07:27:33', 0, NULL, 0, NULL, 0, NULL, NULL, 0),
('2323f98a-bd69-4e73-ab7c-b0001ac784c5', 'biromarcika', 'biromarci@gmail.com', '$2b$12$pPazxagpmQpEbX1YW20/geQA10cWCj.EDaixxEbQv0RhoIyMJuUj2', 124, 50, 0, '2026-03-17 07:26:32', 0, NULL, 0, NULL, 0, NULL, NULL, 0),
('9a1f2856-5b23-4e96-8245-887f92db2f8e', 'vargimatix', 'vargimatix@gmail.com', '$2b$12$E4K3Ige.DhT1GUMEhWflWeRtf6xCssaA3RnHIOfx7ZqEgSyEHZue6', 1327, 1108, 1, '2026-01-23 13:20:33', 1, 'hardcore', 1, '2026-03-05 10:29:19', 1, NULL, NULL, 0),
('9ac5c263-f979-4b92-a342-2df86d12463c', 'NagyB', 'nagybalazs@gmail.com', '$2b$12$bSsGaPyk/HD/zjpAJK5As.FR.BbiSuqAh1UsMpJtnJ3g3QMFhNEPe', 670, 163, 0, '2026-03-17 07:23:28', 1, 'active', 0, NULL, 0, NULL, NULL, 0),
('e1a83779-4dde-4ca3-95c9-5a019fb64785', 'trichard', 'ricsike200719@gmail.com', '$2b$12$f2F7IqSAT7C2G9wo1JY.7O8p4t6yDxlW215ovKA/pPChCLagLFi/G', 2563, 1732, 0, '2026-03-17 07:16:11', 1, 'casual', 0, NULL, 0, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_endpoint_access`
--

CREATE TABLE `user_endpoint_access` (
  `uuid` varchar(36) NOT NULL,
  `endpoint` varchar(100) NOT NULL,
  `methods` text NOT NULL,
  `user_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `user_endpoint_access`
--

INSERT INTO `user_endpoint_access` (`uuid`, `endpoint`, `methods`, `user_id`) VALUES
('0107e03e-4e1c-419d-bdb7-5a2c3df5242f', '/api/v1/shop', 'POST,GET,PUT,DELETE', '9a1f2856-5b23-4e96-8245-887f92db2f8e'),
('0407e03e-4e1c-419d-bdb7-5a2c3df5242f', '/api/v1/shop', 'POST,GET,PUT,DELETE', 'e1a83779-4dde-4ca3-95c9-5a019fb64785'),
('0a3e7aa1-fe67-4d16-957a-9ce1cb7bbe7b', '/api/v1/users/stats', 'GET', '2323f98a-bd69-4e73-ab7c-b0001ac784c5'),
('2ba7661d-8aee-45ac-a77f-cae6ee1bc10d', '/api/v1/challenges', 'POST,GET', '9ac5c263-f979-4b92-a342-2df86d12463c'),
('317c40f7-269f-443d-8e3c-64a2b508888f', '/api/v1/shop', 'POST,GET,PUT,DELETE', '0c68f9fb-613f-4224-9953-8a03dbd876ba'),
('46d487ea-2ab5-49e3-b840-6b384c1a37cd', '/api/v1/categories', 'POST,GET', '9a1f2856-5b23-4e96-8245-887f92db2f8e'),
('541d5e09-b34f-414d-a4df-593c424289b4', '/api/v1/users/stats', 'GET', '9ac5c263-f979-4b92-a342-2df86d12463c'),
('76d487ea-2ab5-49e3-b840-6b384c1a37cd', '/api/v1/categories', 'POST,GET', 'e1a83779-4dde-4ca3-95c9-5a019fb64785'),
('82162813-988f-4e31-9636-09b2f20f5519', '/api/v1/users', 'POST,GET,PUT', '9ac5c263-f979-4b92-a342-2df86d12463c'),
('83050eed-cdd3-43ab-afe4-a502ca292d1d', '/api/v1/shop', 'POST,GET,PUT,DELETE', '9ac5c263-f979-4b92-a342-2df86d12463c'),
('877d8992-3b3f-4a3c-b0c5-ca74755a8a72', '/api/v1/categories', 'POST,GET', '2323f98a-bd69-4e73-ab7c-b0001ac784c5'),
('8c81bbcb-6f02-4d41-8df3-025772d4971a', '/api/v1/users', 'POST,GET,PUT', '0c68f9fb-613f-4224-9953-8a03dbd876ba'),
('9d641f03-e7dc-4852-b41f-d49a1d776e79', '/api/v1/tickets', 'POST', '9ac5c263-f979-4b92-a342-2df86d12463c'),
('b626d960-05f7-4fdb-84a4-48492d409b12', '/api/v1/tickets', 'POST', '9a1f2856-5b23-4e96-8245-887f92db2f8e'),
('b636d960-05f7-4fdb-84a4-48492d409b12', '/api/v1/tickets', 'POST', 'e1a83779-4dde-4ca3-95c9-5a019fb64785'),
('b740d3b0-6ac9-4165-967f-cd6b9fc36484', '/api/v1/challenges', 'POST,GET', '2323f98a-bd69-4e73-ab7c-b0001ac784c5'),
('c0623d10-70ee-4811-9017-efab7cc6163a', '/api/v1/users/stats', 'GET', '0c68f9fb-613f-4224-9953-8a03dbd876ba'),
('c193e91e-2485-4b76-a7cc-a240bcdc4214', '/api/v1/tickets', 'POST', '2323f98a-bd69-4e73-ab7c-b0001ac784c5'),
('d5183227-3534-41b5-868e-98349e92f8ab', '/api/v1/users', 'POST,GET,PUT', 'e1a83779-4dde-4ca3-95c9-5a019fb64785'),
('d5193227-3534-41b5-868e-98349e92f8ab', '/api/v1/users', 'POST,GET,PUT', '9a1f2856-5b23-4e96-8245-887f92db2f8e'),
('e00fc55c-c66c-44ee-9cdc-9cd95987f7bc', '/api/v1/users', 'POST,GET,PUT', '2323f98a-bd69-4e73-ab7c-b0001ac784c5'),
('e6a57abe-0c82-4934-9501-fb6bc479b220', '/api/v1/challenges', 'POST,GET', '9a1f2856-5b23-4e96-8245-887f92db2f8e'),
('e6a57abf-0c82-4934-9501-fb6bc479b220', '/api/v1/challenges', 'POST,GET', 'e1a83779-4dde-4ca3-95c9-5a019fb64785'),
('ec790163-b33b-4f68-9ef2-154e88023af0', '/api/v1/categories', 'POST,GET', '9ac5c263-f979-4b92-a342-2df86d12463c'),
('ee174538-f780-410a-929c-97ba2e24f308', '/api/v1/categories', 'POST,GET', '0c68f9fb-613f-4224-9953-8a03dbd876ba'),
('ef7f8d4d-d577-4116-83e5-a5b4a06fcaaf', '/api/v1/shop', 'POST,GET,PUT,DELETE', '2323f98a-bd69-4e73-ab7c-b0001ac784c5'),
('f7be71e9-9cac-4d4d-a263-874cae80af82', '/api/v1/tickets', 'POST', '0c68f9fb-613f-4224-9953-8a03dbd876ba'),
('fe405f35-a23b-4cce-9172-f36c96c99923', '/api/v1/challenges', 'POST,GET', '0c68f9fb-613f-4224-9953-8a03dbd876ba'),
('ff2aac02-4645-4cdf-a481-0f8382d01c7a', '/api/v1/users/stats', 'GET', 'e1a83779-4dde-4ca3-95c9-5a019fb64785'),
('ff2bac02-4645-4cdf-a481-0f8382d01c7a', '/api/v1/users/stats', 'GET', '9a1f2856-5b23-4e96-8245-887f92db2f8e');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_interests`
--

CREATE TABLE `user_interests` (
  `uuid` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `category_id` varchar(36) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `user_interests`
--

INSERT INTO `user_interests` (`uuid`, `user_id`, `category_id`, `created_at`) VALUES
('27a12f3a-2e32-4f6c-a75b-dd3b906e6dd2', '9ac5c263-f979-4b92-a342-2df86d12463c', '2b383ce8-1885-11f1-9435-82f5bdcc9915', '2026-03-17 07:23:45'),
('3cacbddc-3fc6-453a-9d1a-626b986cac03', 'e1a83779-4dde-4ca3-95c9-5a019fb64785', '2b3708aa-1885-11f1-9435-82f5bdcc9915', '2026-03-17 07:17:13'),
('3fe0aae8-03fc-45d6-8521-a1d9342eca4a', '9ac5c263-f979-4b92-a342-2df86d12463c', '2b348a3a-1885-11f1-9435-82f5bdcc9915', '2026-03-17 07:23:45'),
('6d823ad9-bec7-4d8c-b1af-eb47ded19dae', 'e1a83779-4dde-4ca3-95c9-5a019fb64785', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-17 07:17:13'),
('6f38cc0b-d410-4ff6-96e4-2afa324402b5', 'd3547c7a-cfdd-4ec7-81b4-0466cc0f83db', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-10 11:30:09'),
('7267a7f1-c296-4dd6-893f-03621fb9aa72', '9ac5c263-f979-4b92-a342-2df86d12463c', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-17 07:23:45'),
('80bd9652-22b0-4b1e-90f3-7dc5f82ba7a6', '9ac5c263-f979-4b92-a342-2df86d12463c', '2b355834-1885-11f1-9435-82f5bdcc9915', '2026-03-17 07:23:45'),
('813e1902-9713-40e5-8ce5-127a0ce7a706', 'e1a83779-4dde-4ca3-95c9-5a019fb64785', '2b33404e-1885-11f1-9435-82f5bdcc9915', '2026-03-17 07:17:13'),
('98a81f75-090d-4d7a-8860-8b5ecce070aa', '9ac5c263-f979-4b92-a342-2df86d12463c', '2b32bcb4-1885-11f1-9435-82f5bdcc9915', '2026-03-17 07:23:45'),
('a0edb676-a093-436f-b1e5-5a3e3275f6ca', 'd3547c7a-cfdd-4ec7-81b4-0466cc0f83db', '2b369db6-1885-11f1-9435-82f5bdcc9915', '2026-03-10 11:30:09'),
('a9674b37-0cc5-4d72-8815-2e6d9a258329', '9ac5c263-f979-4b92-a342-2df86d12463c', '2b37d622-1885-11f1-9435-82f5bdcc9915', '2026-03-17 07:23:45'),
('bd2bed02-d2c4-4287-82cd-a46b9ce89949', '9ac5c263-f979-4b92-a342-2df86d12463c', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-17 07:23:45'),
('c4432f76-a563-499c-8845-a7dc7f18e192', 'd3547c7a-cfdd-4ec7-81b4-0466cc0f83db', '2b35c774-1885-11f1-9435-82f5bdcc9915', '2026-03-10 11:30:09'),
('d0f685ca-ee4d-48b6-9cb8-3fb58b69f6b8', 'd3547c7a-cfdd-4ec7-81b4-0466cc0f83db', '2b376f52-1885-11f1-9435-82f5bdcc9915', '2026-03-10 11:30:09');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_shop_items`
--

CREATE TABLE `user_shop_items` (
  `uuid` varchar(36) NOT NULL,
  `user_id` varchar(36) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `shop_item_id` varchar(36) NOT NULL,
  `purchased_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_tasks`
--

CREATE TABLE `user_tasks` (
  `uuid` varchar(36) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `task_id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `completed_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`uuid`),
  ADD KEY `created_by` (`created_by`,`updated_by`),
  ADD KEY `categories_ibfk_2` (`updated_by`);

--
-- A tábla indexei `challenge_submissions`
--
ALTER TABLE `challenge_submissions`
  ADD PRIMARY KEY (`uuid`),
  ADD KEY `idx_submissions_user_task` (`user_task_id`);

--
-- A tábla indexei `page_views`
--
ALTER TABLE `page_views`
  ADD PRIMARY KEY (`uuid`),
  ADD UNIQUE KEY `page_views_date_key` (`date`);

--
-- A tábla indexei `shop_items`
--
ALTER TABLE `shop_items`
  ADD PRIMARY KEY (`uuid`);

--
-- A tábla indexei `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`uuid`),
  ADD KEY `categories_id` (`categories_id`),
  ADD KEY `created_by` (`created_by`,`updated_by`),
  ADD KEY `tasks_ibfk_2` (`updated_by`);

--
-- A tábla indexei `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`uuid`),
  ADD KEY `idx_tickets_user_id` (`user_id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uuid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- A tábla indexei `user_endpoint_access`
--
ALTER TABLE `user_endpoint_access`
  ADD PRIMARY KEY (`uuid`),
  ADD KEY `user_id` (`user_id`);

--
-- A tábla indexei `user_interests`
--
ALTER TABLE `user_interests`
  ADD PRIMARY KEY (`uuid`),
  ADD UNIQUE KEY `user_interests_user_id_category_id_key` (`user_id`,`category_id`),
  ADD KEY `user_interests_category_id_idx` (`category_id`),
  ADD KEY `user_interests_user_id_idx` (`user_id`);

--
-- A tábla indexei `user_shop_items`
--
ALTER TABLE `user_shop_items`
  ADD PRIMARY KEY (`uuid`),
  ADD UNIQUE KEY `user_shop_uniq` (`user_id`,`shop_item_id`),
  ADD KEY `shop_item_id` (`shop_item_id`),
  ADD KEY `user_id` (`user_id`);

--
-- A tábla indexei `user_tasks`
--
ALTER TABLE `user_tasks`
  ADD PRIMARY KEY (`uuid`),
  ADD KEY `task_id` (`task_id`,`user_id`),
  ADD KEY `user_tasks_ibfk_1` (`user_id`);

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`uuid`),
  ADD CONSTRAINT `categories_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `users` (`uuid`);

--
-- Megkötések a táblához `challenge_submissions`
--
ALTER TABLE `challenge_submissions`
  ADD CONSTRAINT `challenge_submissions_ibfk_1` FOREIGN KEY (`user_task_id`) REFERENCES `user_tasks` (`uuid`);

--
-- Megkötések a táblához `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`uuid`),
  ADD CONSTRAINT `tasks_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `users` (`uuid`),
  ADD CONSTRAINT `tasks_ibfk_3` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`uuid`);

--
-- Megkötések a táblához `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `fk_tickets_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`uuid`);

--
-- Megkötések a táblához `user_endpoint_access`
--
ALTER TABLE `user_endpoint_access`
  ADD CONSTRAINT `user_endpoint_access_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`uuid`);

--
-- Megkötések a táblához `user_shop_items`
--
ALTER TABLE `user_shop_items`
  ADD CONSTRAINT `user_shop_items_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`uuid`),
  ADD CONSTRAINT `user_shop_items_ibfk_2` FOREIGN KEY (`shop_item_id`) REFERENCES `shop_items` (`uuid`);

--
-- Megkötések a táblához `user_tasks`
--
ALTER TABLE `user_tasks`
  ADD CONSTRAINT `user_tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`uuid`),
  ADD CONSTRAINT `user_tasks_ibfk_2` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`uuid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
