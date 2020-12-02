Lahiyə haqqında umümi məlumat : Online məhsulların satışı üçün yığılan web sayt. Səhifəyə daxil olan müştərilər, onlayn şəkildə istədikləri məhsulları sifariş edib əldə edə biləcklər.

Lahiyə 5 hissədən ibarət olacaq:

- Ana səhifə
- Məhsullar
- Haqqimizda
- Seçiımiş məhsullar
- Əlaqə
- Day01

# Day01

web-saytin kodlarinin yazildigi hisseler:

- id-si "shopnow" olan,
- class-i "accaunt" olan,
- logo ve menyu olan hissesi

# Day02

- Header hissesinin kodlari yazildi,
- Kategoriya bolmesinde qutular yaradildi ve yerlesdirildi

                <div>
                    <div class="price">ipsum dolorsitamet<br><br>₼10.99</div>
                    <p>Sale</p>
                </div>
                <div>
                    <div class="price">Lorem ipsum dolor sit amet<br><br>₼10.99</div>
                    <p>Sale</p>
                </div>
                <div>
                    <div class="price">Lorem ipsum dolor sit amet<br><br>₼10.99</div>
                    <p>Sale</p>
                </div>
                <div>
                    <div class="price">Lorem ipsum dolor sit amet<br><br>₼10.99</div>
                    <p>Sale</p>
                </div>
            </div>










            .best div {
	width: 255px;
	height: 400px;
	margin: 30px 15px 0;
	display: flex;
	align-items: flex-end;
}

.best {
	display: flex;
}

.best div .price {
	height: 80px;
	border: none;
	background: #f5f5f5;
	margin: 0;
	display: flex;
	align-items: center;
	padding: 0 16px;
	position: absolute;
	z-index: 0;
}

.best div p {
	background: #010101;
	color: #ffffff;
	padding: 8px 3px;
	font-weight: 700;
	text-transform: uppercase;
	margin: 0 0 365px 197px;
	position: relative;
	z-index: 1;
}