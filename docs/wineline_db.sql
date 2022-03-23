-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-03-2022 a las 21:54:55
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wineline_db`
--
CREATE DATABASE IF NOT EXISTS `wineline_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `wineline_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Trumpeter', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cartproduct`
--

DROP TABLE IF EXISTS `cartproduct`;
CREATE TABLE `cartproduct` (
  `id` int(10) UNSIGNED NOT NULL,
  `subtotal` decimal(6,2) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `discount` decimal(2,1) NOT NULL,
  `quantity` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `order_ship` date NOT NULL,
  `cartId` int(10) UNSIGNED DEFAULT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Vinos', NULL, NULL),
(2, 'Cervezas', NULL, NULL),
(3, 'Espumantes', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(100) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `description` text NOT NULL,
  `discount` decimal(5,2) NOT NULL,
  `new` bit(2) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `brandId` int(10) UNSIGNED DEFAULT NULL,
  `categoryId` int(10) UNSIGNED DEFAULT NULL,
  `varietyId` int(10) UNSIGNED DEFAULT NULL,
  `volumeId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `price`, `description`, `discount`, `new`, `createdAt`, `updatedAt`, `deletedAt`, `brandId`, `categoryId`, `varietyId`, `volumeId`) VALUES
(1, 'Trumpeter', '1643036550919-637800597_productImage.jpg', '1160.00', 'Rojo violáceo brillante, seduce con sus aromas frutales (ciruela) y especiados (canela, cardamomo, pimienta negra). Posee gran cuerpo y su vivaz estructura acentúa los taninos intensos que se vuelven aterciopelados en el retrogusto. Variedad: 100% Malbec.', '0.00', b'00', NULL, NULL, NULL, 1, 1, 1, 1),
(22, 'Luigi Bosca', '1648056980620-7267540_image.jpg', '1350.00', 'Luigi Bosca Malbec es un tinto de color rojo violáceo brillante. Sus aromas son intensos y amables, con notas que recuerdan a frutas rojas, y tonos algo florales y especiados. En boca es generoso, fluido y expresivo, con taninos incipientes. De paladar franco y paso refrescante, con buen cuerpo y carácter.', '10.00', b'00', '2022-03-21 23:44:28', '2022-03-23 17:36:20', NULL, NULL, 1, 1, 1),
(23, 'Baron B', '1647914157910-710979778_image.jpg', '2200.00', 'Sus finas y persistentes burbujas, de color amarillo con destellos ocres, revelan autenticidad y delicadeza. Aromas expresivos a damasco y frutos ci´tricos se combinan con notas de pan tostado y frutos secos, dando complejidad a este espumante con final de boca sensual y de gran persistencia.', '0.00', b'00', '2022-03-22 01:55:57', '2022-03-22 01:55:57', NULL, NULL, 3, 8, 5),
(24, 'Nieto Senetiner', '1648056430026-621253868_image.jpg', '1100.00', 'Ligero tono ámbar. Aroma complejo y frutado, recuerda notas de frambuesa junto con notas de praliné y pan tostado, fiel a la excelencia del Pinot Noir.', '5.00', b'00', '2022-03-23 17:27:10', '2022-03-23 17:27:10', NULL, NULL, 3, 8, 1),
(25, 'Rutini', '1648056488981-474713934_image.jpg', '1215.00', 'Rojo intenso, con matices azulados. En nariz, se presenta frutado, con notas de ciruela, vainilla y anís; mientras, en boca, se reafirman los acentos aciruelados. Los taninos, muy presentes pero amables, destacan su personalidad. Variedad: 100% Malbec de Altamira, Gualtallary y La Consulta.', '0.00', b'00', '2022-03-23 17:28:08', '2022-03-23 17:28:08', NULL, NULL, 1, 1, 1),
(26, 'Stella Artois', '1648056698740-950470696_image.png', '160.00', 'Tiene un Sabor sutil, proviene de la mezcla de la mejor malta y las mejores variedades de lúpulo. Utilizando sólo ingredientes naturales que garantiza una lager fresca, de alta calidad con un ligero sabor amargo.', '0.00', b'00', '2022-03-23 17:31:38', '2022-03-23 17:31:38', NULL, NULL, 2, 10, 4),
(27, 'Corona', '1648056768725-537134649_image.jpg', '220.00', 'Corona Porron 710 cc (Pack x 12) Corona Extra es única porque tiene un color inconfundible, un sabor incomparable y en definitiva no tiene igual. ... Corona es una cerveza clara que no esconde nada, de ahí su botella transparente. Y es que cuando se usan sólo los mejores ingredientes, no hay nada que ocultar.', '0.00', b'00', '2022-03-23 17:32:48', '2022-03-23 17:32:48', NULL, NULL, 2, 10, 4),
(28, 'Chandon', '1648056853493-692616796_image.jpg', '990.00', 'Chandon Délice es la sutil variante de un estilo. Versátil por combinar lo clásico del Chardonnay y Pinot Noir con lo vanguardista del Sémillon y Petit Manseng. Este espumante traspasa la frontera de sabores. Su color es amarillo brillante con algunos matices verdosos.', '0.00', b'00', '2022-03-23 17:34:13', '2022-03-23 17:34:13', NULL, NULL, 3, 11, 1),
(29, 'Andes', '1648056904484-16983656_image.jpg', '390.00', 'La Andes Origen Rubia es una Cerveza estilo american pilsner, una Rubia con cuerpo y carácter maltoso. Aroma leve a lúpulo, cereal y toque de levadura. Debe servirse en copa para apreciar mejor sus aromas y resaltar así su color dorado brillante.', '0.00', b'00', '2022-03-23 17:35:04', '2022-03-23 17:35:04', NULL, NULL, 2, 10, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `userName` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cellphone` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `country` varchar(100) NOT NULL,
  `adress` text NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `admin` bit(1) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `userName`, `email`, `cellphone`, `password`, `country`, `adress`, `avatar`, `admin`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Nahuel', 'Nahuel09', 'nahuelm@gmail.com', '111111111111', '$2a$10$ICUYIZxNudrwf/2XVSPyNOVl1uFnfugFwluivca6Gs86vrbqM5YEC', 'Uruguay', 'Calle Falsa 123', '1648057629280-787712398_avatar.jpg', b'0', '2022-03-17 16:01:12', '2022-03-23 17:47:09', NULL),
(2, 'Nahuel Prueba', 'PruebaActualiz', 'usuarioprueba@gmail.com', '111112211111', '$2a$10$DlYlVxSUVWZsH5PZEmPeuuMP4/ePlPVMe1tsDSOI9UYVrV8V6JnQu', 'Venezuela', 'Calle Falsa 700', '1648057395550-73002422_avatar.jpg', b'0', '2022-03-17 17:42:20', '2022-03-23 17:43:15', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `varieties`
--

DROP TABLE IF EXISTS `varieties`;
CREATE TABLE `varieties` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `varieties`
--

INSERT INTO `varieties` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Malbec', NULL, NULL),
(2, 'Cavernet', NULL, NULL),
(3, 'Cabernet Sauvignon', NULL, NULL),
(4, 'Merlot', NULL, NULL),
(5, 'Pinot Noir', NULL, NULL),
(6, 'Brut', NULL, NULL),
(7, 'Rosé ', NULL, NULL),
(8, 'Extra Brut', NULL, NULL),
(9, 'Blanc de noirs', NULL, NULL),
(10, 'Rubia', NULL, NULL),
(11, 'Delice', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `volumes`
--

DROP TABLE IF EXISTS `volumes`;
CREATE TABLE `volumes` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `volumes`
--

INSERT INTO `volumes` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, '750', NULL, NULL),
(2, '200', NULL, NULL),
(3, '250', NULL, NULL),
(4, '375', NULL, NULL),
(5, '1500', NULL, NULL),
(6, '3000', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cartproduct`
--
ALTER TABLE `cartproduct`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `cartId` (`cartId`);

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brandId` (`brandId`),
  ADD KEY `varietyId` (`varietyId`),
  ADD KEY `categoryId` (`categoryId`),
  ADD KEY `volumeId` (`volumeId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `varieties`
--
ALTER TABLE `varieties`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `volumes`
--
ALTER TABLE `volumes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `cartproduct`
--
ALTER TABLE `cartproduct`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `varieties`
--
ALTER TABLE `varieties`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `volumes`
--
ALTER TABLE `volumes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cartproduct`
--
ALTER TABLE `cartproduct`
  ADD CONSTRAINT `cartproduct_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `cartproduct_ibfk_2` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`);

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`varietyId`) REFERENCES `varieties` (`id`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_4` FOREIGN KEY (`volumeId`) REFERENCES `volumes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
