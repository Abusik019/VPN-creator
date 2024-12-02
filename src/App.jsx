import styles from "./app.module.scss";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TariffItem from './components/TariffItem';
import SliderFollowers from "./components/SliderFollowers";
import SliderSubstraction from './components/SliderSubstraction';
import { useSearchParams } from "react-router-dom";
import Question from "./components/Quiestion";
import ProfitList from './components/ProfitList';
import SliderSubstractionFree from "./components/SliderSubstractionFree";


export default function Home() {
    const [premiumSubstraction, setPremiumSubstraction] = useState(199);
    const [followers, setFollowers] = useState(500);

    // Вычисление стоимости премиум тарифа
    const premiumCost = premiumSubstraction >= 199 ? Math.round(followers * (premiumSubstraction - 100)) : Math.round(followers * ((premiumSubstraction - 100) - ((premiumSubstraction - 100) * 0.1)));
    // Вычисление стоимости бесплатного тарифа
    function calculatePrice(followers){
        if(followers <= 100){
            return followers * 79
        } else if(followers > 100 && followers <= 1000){
            return followers * 89
        } else{
            return followers * 99
        }
    }

    const freeCost = calculatePrice(followers);

    
    const [searchParams, setSearchParams] = useSearchParams();
    const paramValue = searchParams.get("tariff"); 
    

    const [isPremium, setIsPremium] = useState(true);

    useEffect(() => {
        if (paramValue) {
            setIsPremium(paramValue === 'premium' ? true : false);
        }

    }, [paramValue])

    function handleSliderHover(e) {
        const slides = document.querySelectorAll('#advantagesSlider li');
    
        const hoveredId = parseInt(e.currentTarget.id.match(/\d/)[0], 10);
    
        slides.forEach((slide, index) => {
            const slideId = index + 1; 
            const zIndexOffset = 4 - Math.abs(hoveredId - slideId); 
            const translateY = (Math.abs(hoveredId - slideId) * 20) + 'px'; 
    
            slide.style.zIndex = zIndexOffset;
            slide.style.transform = `translateY(${translateY})`;
    
            if (hoveredId === slideId) {
                slide.style.transform = 'translateY(0)';
            }
        });
    }

    const handleButtonClick = (tariff) => {
        setSearchParams({ tariff: tariff });
    };

    return (
        <div className={styles.page}>
            <header>
                <Navbar />
                <div className={styles.headerContent}>
                    <div className={styles.headerLeft}>
                        <h2>
                            Создайте VPN-бота
                            <br />
                            и зарабатывайте на трафике
                        </h2>
                        <p>
                            Превратите свою аудиторию в источник
                            <br />
                            стабильного дохода всего за 1 день.
                        </p>
                        <div className={styles.btnContainer}>
                            <button className={styles.btnTry}>
                                Попробовать
                            </button>
                            <button className={styles.btnCalculte}>
                                Рассчитать прибыль
                            </button>
                        </div>
                    </div>
                    <div className={styles.headerRight}>
                        <div className={styles.cup}>
                            <img
                                src="/VPN-creator/steam.svg"
                                alt="steam"
                                width={86}
                                height={138}
                            />
                            <img 
                                src="/VPN-creator/cup.jpg"
                                alt="cup"
                                width={78}
                                height={75}
                            />
                        </div>
                        <div className={styles.human}>
                            <ProfitList />
                        </div>
                        <img
                            src="/VPN-creator/lamp.svg"
                            alt="lamp"
                            width={168}
                            height={234}
                            className={styles.lamp}
                        />
                    </div>
                </div>
            </header>
            <section className={styles.advantages}>
                <h2>
                    Преимущества создания своего
                    <span>
                        <br />
                        VPN-бота в Telegram
                    </span>
                </h2>
                <div className={styles.advantagesContent}>
                    <div>
                        <h2>Пассивный доход</h2>
                        <h3>
                            В наше время хороший и быстрый VPN нужен каждому.
                            Настройте бот один раз — и получайте доход
                            от ежемесячных подписок ваших пользователей.
                        </h3>
                    </div>
                    <div>
                        <h2>Никакого кода</h2>
                        <h3>
                            Создать VPN-бота, вы можете без навыков
                            программирования.
                            <br />
                            Перейдите в @CreatorVPN_Bot и получите
                            все преимущества нашего сервиса.
                        </h3>
                        <ul>
                            <li>Лендинг под бота</li>
                            <li>Весь функционал бота</li>
                            <li>Оптимизированные сервера</li>
                            <li>Готовая платёжная система</li>
                        </ul>
                    </div>
                    <div>
                        <div className={styles.advantagesTextBlock}>
                            <h2>Все преимущества Creator VPN</h2>
                            <h3>
                                Все продумано до мелочей, чтобы наши партнёры
                                думали только о распространении своего VPN-бота,
                                а обо всем остальном позаботимся мы!
                            </h3>
                            <button>Попробовать</button>
                        </div>
                        <ul className={styles.advantagesSlider} id="advantagesSlider">
                            <li id="slide-1" onMouseEnter={handleSliderHover}>
                                <img
                                    src="/VPN-creator/slider-item1.svg"
                                    alt="vpn"
                                    width={196}
                                    height={378}
                                />
                            </li>
                            <li id="slide-2" onMouseEnter={handleSliderHover}>
                                <img
                                    src="/VPN-creator/slider-item2.svg"
                                    alt="vpn"
                                    width={196}
                                    height={378}
                                />
                            </li>
                            <li id="slide-3" onMouseEnter={handleSliderHover}>
                                <img
                                    src="/VPN-creator/slider-item3.svg"
                                    alt="vpn"
                                    width={196}
                                    height={378}
                                />
                            </li>
                            <li id="slide-4" onMouseEnter={handleSliderHover}>
                                <img
                                    src="/VPN-creator/slider-item4.svg"
                                    alt="vpn"
                                    width={196}
                                    height={378}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={styles.aboutUs}>
                <ul className={styles.aboutUsContent}>
                    <li className={styles.aboutUsItem}>
                        <img 
                            src="/VPN-creator/about-us1.svg"
                            alt="setting"
                            width={48}
                            height={48}
                        />
                        <h2>Лёгкая настройка</h2>
                        <h3>Запуск всего за несколько шагов.</h3>
                    </li>
                    <li className={styles.aboutUsLine}></li>
                    <li className={styles.aboutUsItem}>
                        <img 
                            src="/VPN-creator/about-us2.svg"
                            alt="profit"
                            width={56}
                            height={48}
                        />
                        <h2>Высокая доходность</h2>
                        <h3>100,000 ₽ ежемесячно с 1000 подписчиков.</h3>
                    </li>
                    <li className={styles.aboutUsLine}></li>
                    <li className={styles.aboutUsItem}>
                        <img 
                            src="/VPN-creator/about-us3.svg"
                            alt="support"
                            width={56}
                            height={48}
                        />
                        <h2>Поддержка 24/7</h2>
                        <h3>Поможем в случае возникновения проблем.</h3>
                    </li>
                </ul>
            </section>
            <section className={styles.tariffs}>
                <h2>Тарифы</h2>
                <ul className={styles.tariffsContent}>
                    <li>
                        <h2>Бесплатный</h2>
                        <h3>Для тех, кто хочет просто попробовать.</h3>
                        <button>Попробовать</button>
                    </li>
                    <li>
                        <h2>Чем больше продаж, тем больше заработок.</h2>
                        <h3>Начальная стоимость VPN для Партнёров зависит от количества ежемесячных продаж:</h3>
                        <ul className={styles.tariffsContentDropdown}>
                            <TariffItem
                                title="1–5 продаж — 199 ₽"
                                description="При 1–5 ежемесячных продажах, стоимость для вас 199 ₽, стоимость в вашем боте 199 ₽. Ваша прибыль с продажи каждой подписки — 0 ₽."
                            />
                            <TariffItem
                                title="5–10 продаж — 130 ₽"
                                description="При 5–10 ежемесячных продажах, стоимость для вас 130 ₽, стоимость в вашем боте 199 ₽. Ваша прибыль с продажи каждой подписки — 69 ₽."
                            />
                            <TariffItem
                                title="10–100 продаж — 120 ₽"
                                description="При 10–100 ежемесячных продажах, стоимость для вас 120 ₽, стоимость в вашем боте 199 ₽. Ваша прибыль с продажи каждой подписки — 79 ₽."
                            />
                            <TariffItem
                                title="100–1000 продаж — 110 ₽"
                                description="При 100–1000 ежемесячных продажах, стоимость для вас 110 ₽, стоимость в вашем боте 199 ₽. Ваша прибыль с продажи каждой подписки — 89 ₽."
                            />
                            <TariffItem
                                title="1000+ продаж — 100 ₽ + бесплатный переход на платный тариф"
                                description="При 1000+ ежемесячных продажах, стоимость для вас 100 ₽, стоимость в вашем боте регулируется вами в диапазоне от 150 до 400 ₽, связано это с бесплатным переходом на Premium тариф. Ваша прибыль с продажи каждой подписки — от 50 до 260 ₽."
                            />
                        </ul>
                        <p>* Продажа — это любая оплата, которая прошла в вашем боте.<br/>Стоимость VPN в Вашем боте — 199 ₽.<br/>Разница между стоимостью в боте и начальной стоимостью — ваша прибыль</p>
                    </li>
                    <li className={styles.tariffsContentTry}><button>Попробовать</button></li>
                    <li>
                        <div className={styles.premiumTextBlock}>
                            <h2>Премиум</h2>
                            <p>Для тех, кто хочет самые выгодные условия здесь и сейчас.</p>
                        </div>
                        <div className={styles.premiumPriceBlock}>
                            <div>
                                <h3>2990</h3>
                                <div className={styles.priceText}>
                                    <h4>руб.</h4>
                                    <div></div>
                                    <h5>мес.</h5>
                                </div>
                            </div>
                            <button>Приобрести</button>
                        </div>
                    </li>
                    <li>
                        <ul className={styles.premiumList}>
                            <li>
                                <h2>Начальная стоимость</h2>
                                <h3>100 рублей, все что выше остаётся вам!</h3>
                            </li>
                            <li>
                                <h2>Своя стоимость</h2>
                                <h3>Стоимость VPN зависит только от вас!<br/>Привлекайте пользователей низкой стоимостью.</h3>
                            </li>
                            <li>
                                <h2>Пробная подписка</h2>
                                <h3>3 дня вместо 1-го.</h3>
                            </li>
                            <li>
                                <h2>Моментальные выплаты</h2>
                                <h3>Получайте деньги в течение 10 минут.</h3>
                            </li>
                            <li>
                                <h2>Рассылки</h2>
                                <h3>Отправляйте сообщения всем пользователям, информируйте их о скидках, либо продавайте рекламу.</h3>
                            </li>
                            <li>
                                <h2>Промокоды</h2>
                                <h3>Создавайте промокоды для подписчиков, радуйте подписчиков бесплатной подпиской, 1 промокод 90 рублей.</h3>
                            </li>
                            <li>
                                <h2>Партнёрская программа</h2>
                                <h3>Включите партнерку, чтобы пользователь в вашем боте получал 3 дня за приглашённого пользователя, а приглашённый получал 7 дней.</h3>
                            </li>
                            <li>
                                <h2>Обязательная подписка</h2>
                                <h3>Поставь свой канал на обязательную подписку.</h3>
                            </li>
                            <li>
                                <h2>Кастомизация лендинга</h2>
                                <h3>Измени лендинг под себя, поменяй на нем практически любой текст или картинку.</h3>
                            </li>
                            <li>
                                <h2>Без кнопки «Создать VPN бот»</h2>
                                <h3>Будет возможность убрать кнопку «Создать VPN бот» из вашего VPN бота</h3>
                            </li>
                        </ul>
                    </li>
                    <div className={styles.tariffPriceBlock}>
                            <div>
                                <h3>2990</h3>
                                <div className={styles.tariffPriceText}>
                                    <h4>руб.</h4>
                                    <div></div>
                                    <h5>мес.</h5>
                                </div>
                            </div>
                            <button>Приобрести</button>
                    </div>
                </ul>
            </section>
            <section className={styles.calculator}>
                 <div className={styles.calculatorContainer}>
                    <div className={styles.calculatorTextBlock}>
                        <h2>Калькулятор прибыли</h2>
                        <h3>Выберите тариф и расчитайте свой доход!</h3>
                    </div>                       
                    <div className={styles.calculatorContent}>
                        <div className={styles.calculatorSwitch}>
                            <button onClick={() => handleButtonClick('free')} className={!isPremium ? styles.active : undefined}>Бесплатный</button>
                            <button onClick={() => handleButtonClick('premium')} className={isPremium ? styles.active : undefined}>Премиум</button>
                        </div>
                        {isPremium ?  
                            <div className={styles.calculatorPremium}>
                                <div className={styles.followers}>
                                    <h2>Количество подписчиков</h2>
                                    <SliderFollowers setFollowers={setFollowers}/>
                                </div>
                                <div id="substriction" className={styles.substriction}>
                                    <h2>Стоимость подписки</h2>
                                    <SliderSubstraction setPremiumSubstraction={setPremiumSubstraction}/>
                                </div>
                                {premiumSubstraction > 199 && <h2>*10% от наценки уйдёт на комиссии платежей, если стоимость подписки свыше 199 ₽</h2>}
                                <button className={styles.price}>{premiumCost} ₽ / мес.</button>
                            </div> 
                        : 
                            <div className={styles.calculatorFree}>
                                <div className={styles.followers}>
                                    <h2>Количество подписчиков</h2>
                                    <SliderFollowers setFollowers={setFollowers}/>
                                </div>
                                <div id="substriction" className={styles.substriction}>
                                    <h2>Стоимость подписки</h2>
                                    <SliderSubstractionFree />
                                </div>
                                <h2>*Изменение стоимости доступно в тарифе премиум.</h2>
                                <button className={styles.price}>{freeCost} ₽ / мес.</button>
                            </div>
                        }
                    </div>            
                 </div>           
            </section>
            <section className={styles.questions}>
                <h2>Ответы на часто задаваемые вопросы</h2>
                <ul className={styles.questionsContent}>
                    <Question 
                        number="01" 
                        question="Сколько времени займёт настройка VPN-бота?" 
                        answer="Создание VPN-бота займёт 2–3 минуты, а полная настройка от 5 до 15 минут." 
                    />
                    <Question 
                        number="02" 
                        question="Как я получу прибыль?" 
                        answer="Свою прибыль вы сможете вывести через наш бот в телеграм @CreatorVPN_Bot." 
                    />
                    <Question 
                        number="03" 
                        question="Как быстро подписчики смогут подключиться к моему VPN?" 
                        answer="Подключение происходит в 2 этапа. Бот попросит пользователя установить приложение, а затем скинет ссылку на подключение к Вашему VPN. Настройка разовая, после настройки пользователь сможет включать/выключать VPN через скаченное им мобильное приложение." 
                    />
                    <Question 
                        number="04" 
                        question="Что мои подписчики получат за эти деньги?" 
                        answer="Купив подписку Ваш подписчик получит скоростной и надежный VPN, к которому можно подключить до 3-х устройств." 
                    />
                    <Question 
                        number="05" 
                        question="Это законно?" 
                        answer="В РФ нет законов, которые запрещали бы Вам владеть VPN-сервисом, Вы даёте пользователям ссылку на чужой продукт под вашим именем, все сервера под VPN находятся у нас и денежные средства за покупку идут нам. *Партнёр обязан платить налоги со своей прибыли, как самозанятый или ИП. Неуплата налогов преследуется законом РФ." 
                    />
                    <Question 
                        number="06" 
                        question="Как принимать платежи?" 
                        answer="Вам не нужно принимать платежи, мы уже все настроили за Вас. Деньги с покупок будут идти к нам на счета, а Вы сможете вывести свою прибыль через наш телеграм-бот @CreatorVPN_Bot." 
                    />
                </ul>
            </section>
            <section className={styles.startNow}>
                <div className={styles.startNowContent}>
                    <div className={styles.startNowTextBlock}>
                        <h2>Начните зарабатывать уже сегодня!</h2>
                        <h3>Превратите свою аудитория в источник стабильного дохода, создайте свой VPN-бот всего за 5 минут.</h3>
                        <button>Попробовать</button>
                    </div>
                    <div className={styles.startNowImage}>
                        <img 
                            src="/VPN-creator/start-now-img.svg"
                            alt="human"
                        />
                    </div>
                </div>
            </section>
            <footer className={styles.footer}>
                <div className={styles.footerInfo}>
                    <div>
                        <h2>Сreator VPN</h2>
                        <h3>Превратите свою аудиторию в источник стабильного дохода всего за 1 день.</h3>
                        <button>Попробовать</button>
                    </div>
                    <div>© 2024 CreatorVpn. Все права защищены</div>
                </div>
                <div className={styles.footerContent}>
                    <ul className={styles.footerContentLeft}>
                        <li>О продукте</li>
                        <li><a href="#">Создать VPN-бот</a></li>
                        <li><a href="#">Новостной telegram-канал</a></li>
                        <li><a href="#">Обратная связь</a></li>
                        <li>Тарифы</li>
                        <li><a href="#">Бесплатный</a></li>
                        <li><a href="#">Премиум</a></li>
                        <li><a href="#">Калькулятор прибыли</a></li>
                    </ul>
                    <ul className={styles.footerContentRight}>
                        <li>Q&A</li>
                        <li><a href='#'>Сколько времени займёт настройка VPN?</a></li>
                        <li><a href='#'>Как я получу прибыль?</a></li>
                        <li><a href='#'>Как быстро подписчики смогут подключиться к моему VPN?</a></li>
                        <li><a href='#'>Что мои подписчики получат за эти деньги?</a></li>
                        <li><a href='#'>Это законно?</a></li>
                        <li><a href='#'>Как принимать платежи?</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
