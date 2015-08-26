<?php

$book1 = array(
	"src" => "img/book1.png",
	"description" => '<a href="#">Краткая история почти ничего.</a> Эта книга &mdash; недоразумение.'
);
$book2 = array(
	"src" => "img/book2.png",
	"description" => '<a href="#">Все знания о вселенной</a> компактно упакованы на одной странице.'
);
$book3 = array(
	"src" => "img/book3.png",
	"description" => 'Автор подробно, всего двумя фразами, <a href="#">объясняет все.</a>'
);
$book4 = array(
	"src" => "img/book4.png",
	"description" => 'Двоичные <a href="#">размышления о жизни после пресса.</a>'
);
$book5 = array(
	"src" => "img/book5.png",
	"description" => 'Прозрачные тексты на мутные темы.'
);
$book6 = array(
	"src" => "img/book6.png",
	"description" => 'О чем спросить первого встречного мутанта с другой планеты. Руководство по умиранию.'
);
$book7 = array(
	"src" => "img/book7.png",
	"description" => 'Технические чертежи и детали самого лучшего робота на свете.'
);
$book8 = array(
	"src" => "img/book8.png",
	"description" => 'Коротко и ясно. Кому не ясно &mdash; Люрр объяснит. Коротко.'
);

$arBooks = array(
	$book1,
	$book2,
	$book3,
	$book4,
	$book5,
	$book6,
	$book7,
	$book8
);

for ($i=0; $i < 20; $i++) { 
	$rand = array_rand($arBooks);

	echo '<div class="mini-book">
			<span class="mini-book__separator"></span>
			<a href="#" class="mini-book__link"><img src="' . $arBooks[$rand]['src'] . '" width="" height="" alt=""><div class="mini-book__flag mini-book__flag--red"></div></a>
			<p class="mini-book__text">' .$arBooks[$rand]['description'] . '</p>
		</div>';
}

?>