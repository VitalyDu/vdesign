'use strict';
    var multiItemSlider = (function () {
      return function (selector, config) {
        var
          _mainElement = document.querySelector(selector), // основный элемент блока
          _sliderWrapper = _mainElement.querySelector('.quiz-block_asks_block'), // обертка для .slider-item
          _sliderItems = _mainElement.querySelectorAll('.quiz-item'), // элементы (.slider-item)
          _sliderFirst = _mainElement.querySelectorAll('.quiz-block_asks_first-ask'), // элементы (.slider-item)
          _sliderSecond = _mainElement.querySelectorAll('.quiz-block_asks_second-ask'), // элементы (.slider-item)
          _sliderThird = _mainElement.querySelectorAll('.quiz-block_asks_third-ask'), // элементы (.slider-item)
          _sliderForth = _mainElement.querySelectorAll('.quiz-block_asks_forth-ask'), // элементы (.slider-item)
          _sliderFiveth = _mainElement.querySelectorAll('.quiz-block_asks_fiveth-ask'), // элементы (.slider-item)
          _sliderControls = _mainElement.querySelectorAll('.quiz-btns'), // элементы управления
          _sliderControlLeft = _mainElement.querySelector('.prev-quiz'), // кнопка "LEFT"
          _sliderControlRight = _mainElement.querySelector('.next-quiz'), // кнопка "RIGHT"
          _sliderControlSend = _mainElement.querySelector('.send'), // кнопка "RIGHT"
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
          _positionLeftItem = 0, // позиция левого активного элемента
          _transform = 0, // значение транфсофрмации .slider_wrapper
          _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
          _items = []; // массив элементов
        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
          _items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
          getMin: 0,
          getMax: _items.length - 1,
        }

        var _transformItem = function (direction) {
          if (direction === 'right') {
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
              return;
            }
            if (!_sliderControlLeft.classList.contains('quiz-btns_show-left')) {
              _sliderControlLeft.classList.add('quiz-btns_show-left');
            }
            if (_sliderControlRight.classList.contains('quiz-btns_show-right') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
              _sliderControlRight.classList.remove('quiz-btns_show-right');
              _sliderControlSend.classList.add('send-active');
            }
            _positionLeftItem++;
            _transform -= _step;
          }
          if (direction === 'left') {
            if (_positionLeftItem <= position.getMin) {
              return;
            }
            if (!_sliderControlRight.classList.contains('quiz-btns_show-right')) {
              _sliderControlRight.classList.add('quiz-btns_show-right');
              _sliderControlSend.classList.remove('send-active');
            }
            if (_sliderControlLeft.classList.contains('quiz-btns_show-left') && _positionLeftItem - 1 <= position.getMin) {
              _sliderControlLeft.classList.remove('quiz-btns_show-left');
            }
            _positionLeftItem--;
            _transform += _step;
          }
          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
          if (e.target.classList.contains('quiz-btns')) {
            e.preventDefault();
            var direction = e.target.classList.contains('next-quiz') ? 'right' : 'left';
            _transformItem(direction);
          }
        };

        var _setUpListeners = function () {
          // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
          _sliderControls.forEach(function (item) {
            item.addEventListener('click', _controlClick);
          });
        }

        // инициализация
        _setUpListeners();

        return {
          right: function () { // метод right
            _transformItem('right');
          },
          left: function () { // метод left
            _transformItem('left');
          }
        }

      }
    }());

    var slider = multiItemSlider('.quiz-block_asks')