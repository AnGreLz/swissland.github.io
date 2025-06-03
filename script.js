        let currentTestimonial = 0;
        let isCheckboxChecked = false;
        let isTourCheckboxChecked = false;
        
        const testimonials = [
            {
                text: "Путешествие с SwissTravel стало для нас настоящим открытием! Каждый момент был наполнен красотой и комфортом.",
                author: "Анна Смирнова",
                position: "Маркетолог, TravelCo",
                avatar: "../assets/images/anna.png"
            },
            {
                text: "Профессиональный подход и внимание к деталям сделали наш отдых незабываемым. Спасибо команде SwissTravel!",
                author: "Михаил Петров",
                position: "Руководитель проектов, TechCorp",
                avatar: "../assets/images/mihail.jpg"
            }
        ];

        // Скроллинг
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Выбор тура
        function openTourSelector() {
            alert('Открывается форма подбора тура. Здесь будет интерактивный селектор туров с фильтрами по датам, бюджету и интересам.');
        }

        // Контактная форма
        function openContactForm() {
            scrollToSection('contact');
        }

        // Преимущества
        function showAdvantageDetails(type) {
            const messages = {
                individual: 'Наш индивидуальный подход включает: персональную консультацию, составление маршрута под ваши интересы, гибкие даты и программу.',
                support: 'Круглосуточная поддержка: горячая линия 24/7, помощь в экстренных ситуациях, онлайн-чат с менеджером.',
                tours: 'Индивидуальные туры: эксклюзивные маршруты, частные гиды, VIP-сервис, уникальные локации.'
            };
            alert(messages[type] || 'Подробная информация скоро будет доступна.');
        }

        // Блог пост 
        function openBlogPost(postId) {
            const posts = {
                'ski-resorts': 'Статья о топ-5 горнолыжных курортах Швейцарии с подробными описаниями трасс, отелей и развлечений.',
                'geneva-tours': 'Гид по лучшим экскурсиям в Женеве: музеи, архитектура, гастрономические туры.',
                'chocolate-tours': 'Сладкое путешествие по швейцарским шоколадным фабрикам и мастерским.'
            };
            alert(posts[postId] || 'Статья загружается...');
        }

        // Посмотреть весь блог
        function showAllBlogs() {
            alert('Переход на страницу со всеми статьями блога. Здесь будут представлены все публикации с возможностью фильтрации по категориям.');
        }

        // Отзывы
        function updateTestimonial() {
            const testimonialText = document.querySelector('.testimonial-text');
            const authorName = document.querySelector('.author-name');
            const authorTitle = document.querySelector('.author-title');
            const authorAvatar = document.querySelector('.author-avatar');
            const dots = document.querySelectorAll('.dot');

            // Обновляем содержимое
            testimonialText.textContent = testimonials[currentTestimonial].text;
            authorName.textContent = testimonials[currentTestimonial].author;
            authorTitle.textContent = testimonials[currentTestimonial].position;
            authorAvatar.src = testimonials[currentTestimonial].avatar;

            // Обновляем точки
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentTestimonial);
            });
        }

        function previousTestimonial() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateTestimonial();
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonial();
        }

        function goToTestimonial(index) {
            currentTestimonial = index;
            updateTestimonial();
        }

        // Карта
        function openMap() {
            alert('Открывается карта с местоположением офиса SwissTravel в Цюрихе. Здесь будет интерактивная карта с маршрутом.');
        }

        // Социальные медиа
        function openSocial(platform) {
            const urls = {
                instagram: 'https://instagram.com/swisstravel',
                twitter: 'https://twitter.com/swisstravel',
                linkedin: 'https://linkedin.com/company/swisstravel',
                youtube: 'https://youtube.com/swisstravel'
            };
            alert(`Переход на ${platform}: ${urls[platform]}`);
        }

        // Чекбокс галочка
        function toggleCheckbox() {
            const checkbox = document.getElementById('termsCheckbox');
            checkbox.classList.toggle('checked');
        }

        // Проверка и отправка формы
        function validateForm() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            const errors = [];
            
            if (!name) errors.push('Имя обязательно для заполнения');
            if (!email) errors.push('Email обязателен для заполнения');
            if (!message) errors.push('Сообщение обязательно для заполнения');
            if (!isCheckboxChecked) errors.push('Необходимо принять условия');
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailRegex.test(email)) {
                errors.push('Введите корректный email адрес');
            }
            
            return errors;
        }

        function showFormMessage(message, type) {
            const messageElement = document.getElementById('formMessage');
            messageElement.textContent = message;
            messageElement.className = `form-message ${type}`;
            messageElement.style.display = 'block';
            
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 5000);
        }

        function submitForm(event) {
            event.preventDefault();
            
            const errors = validateForm();
            
            if (errors.length > 0) {
                showFormMessage(errors.join('. '), 'error');
                return;
            }
            
            // Имитировать отправку формы
            const form = document.getElementById('contactForm');
            form.classList.add('loading');
            
            setTimeout(() => {
                form.classList.remove('loading');
                showFormMessage('Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.', 'success');
                form.reset();
                isCheckboxChecked = false;
                document.getElementById('termsCheckbox').classList.remove('checked');
            }, 2000);
        }

        // Проверка формы при размытии
        document.addEventListener('DOMContentLoaded', function() {
            const inputs = document.querySelectorAll('.form-input, .form-textarea');
            
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    if (this.value.trim() === '') {
                        this.classList.add('error');
                    } else {
                        this.classList.remove('error');
                        this.classList.add('success');
                    }
                });
                
                input.addEventListener('input', function() {
                    this.classList.remove('error', 'success');
                });
            });
        });

        // Плавная прокрутка навигационных ссылок
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Добавить эффект прокрутки в заголовок
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                header.style.backgroundColor = 'rgba(255,255,255,0.95)';
            } else {
                header.style.boxShadow = 'none';
                header.style.backgroundColor = '#ffffff';
            }
        });

        // Добавить анимацию загрузки к кнопкам
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                if (!this.classList.contains('loading')) {
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                }
            });
        });

        // Инициализировать страницу
        document.addEventListener('DOMContentLoaded', function() {
            // Добавление градиентной анимации
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Ознакомление со всеми основными разделами
            document.querySelectorAll('section').forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(section);
            });

            // Инициализирование первого раздела как видимый
            document.querySelector('.hero').style.opacity = '1';
            document.querySelector('.hero').style.transform = 'translateY(0)';

            updateTestimonial();
        });

        // Управление формой тура
        function openTourForm() {
            document.getElementById('tourForm').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeTourForm() {
            document.getElementById('tourForm').classList.remove('active');
            document.body.style.overflow = '';
        }

        function toggleTourCheckbox() {
            isTourCheckboxChecked = !isTourCheckboxChecked;
            document.getElementById('tourTermsCheckbox').classList.toggle('checked');
        }

        function submitTourForm(event) {
            event.preventDefault();
            
            if (!isTourCheckboxChecked) {
                const formMessage = document.getElementById('tourFormMessage');
                formMessage.textContent = 'Пожалуйста, примите условия обработки персональных данных';
                formMessage.style.display = 'block';
                formMessage.style.color = '#ff0000';
                return;
            }
            
            const form = document.getElementById('tourRequestForm');
            const formMessage = document.getElementById('tourFormMessage');
            
            // Имитация отправки формы
            form.classList.add('loading');
            
            setTimeout(() => {
                form.classList.remove('loading');
                formMessage.textContent = 'Спасибо за заявку! Мы свяжемся с вами в ближайшее время.';
                formMessage.style.display = 'block';
                formMessage.style.color = '#28a745';
                
                // Очистка формы
                form.reset();
                isTourCheckboxChecked = false;
                document.getElementById('tourTermsCheckbox').classList.remove('checked');
                
                // Закрытие формы через 3 секунды
                setTimeout(() => {
                    closeTourForm();
                    formMessage.style.display = 'none';
                }, 3000);
            }, 1500);
        }

        // Закрытие формы при клике вне её
        document.addEventListener('DOMContentLoaded', function() {
            const tourForm = document.getElementById('tourForm');
            tourForm.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeTourForm();
                }
            });
        });

        // Инициализация карты
        let map;
        let currentMarker;

        function initMap() {
            // Создаем карту, центрированную на Швейцарии
            map = L.map('switzerlandMap').setView([46.8182, 8.2275], 8);

            // Добавляем слой карты
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            // Добавляем маркер для Швейцарии
            currentMarker = L.marker([46.8182, 8.2275])
                .addTo(map)
                .bindPopup('Швейцария')
                .openPopup();

            // Обработчики для кнопок локаций
            document.querySelectorAll('.location-btn').forEach(button => {
                button.addEventListener('click', function() {
                    // Убираем активный класс у всех кнопок
                    document.querySelectorAll('.location-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    
                    // Добавляем активный класс текущей кнопке
                    this.classList.add('active');
                    
                    // Получаем координаты и название места
                    const lat = parseFloat(this.dataset.lat);
                    const lng = parseFloat(this.dataset.lng);
                    const name = this.dataset.name;
                    
                    // Обновляем маркер
                    if (currentMarker) {
                        map.removeLayer(currentMarker);
                    }
                    
                    currentMarker = L.marker([lat, lng])
                        .addTo(map)
                        .bindPopup(name)
                        .openPopup();
                    
                    // Центрируем карту на новой локации
                    map.setView([lat, lng], name === 'Швейцария' ? 8 : 12, {
                        animate: true,
                        duration: 1
                    });
                });
            });
        }

        // Инициализируем карту после загрузки DOM
        document.addEventListener('DOMContentLoaded', function() {
            // ... existing DOMContentLoaded code ...
            
            // Инициализация карты
            initMap();
        });