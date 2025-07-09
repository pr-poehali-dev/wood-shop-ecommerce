import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wood-light to-white">
      {/* Header */}
      <header className="border-b border-wood-light bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="TreePine" className="text-wood" size={32} />
              <h1 className="text-2xl font-bold text-wood">МастерДерево</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-accent hover:text-wood transition-colors"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="text-accent hover:text-wood transition-colors"
              >
                Каталог
              </a>
              <a
                href="#order"
                className="text-accent hover:text-wood transition-colors"
              >
                Заказать
              </a>
              <a
                href="#contact"
                className="text-accent hover:text-wood transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-wood hover:bg-wood-dark">
              <Icon name="Phone" size={16} />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-wood mb-6">
            Изготовление мебели
            <br />
            <span className="text-accent">на заказ</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создаем уникальную деревянную мебель по вашим размерам и пожеланиям.
            Используем только качественные материалы и современные технологии.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-wood hover:bg-wood-dark">
              <Icon name="Hammer" size={20} />
              Заказать изделие
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-wood text-wood hover:bg-wood hover:text-white"
            >
              <Icon name="Eye" size={20} />
              Посмотреть каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-wood-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Ruler" className="text-wood" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Точные размеры</h3>
              <p className="text-gray-600">
                Изготавливаем по вашим индивидуальным размерам
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wood-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-wood" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">
                Даем гарантию на все изделия от 2 лет
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wood-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="text-wood" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Доставка и сборка</h3>
              <p className="text-gray-600">
                Доставляем и собираем мебель у вас дома
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-wood">
            Популярные изделия
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/img/3843cf65-38f7-4239-9d8a-68b48b8221d0.jpg"
                  alt="Обеденный стол"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-wood">Обеденный стол</CardTitle>
                <CardDescription>
                  Массив дуба, современный дизайн
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-wood">
                    от 25 000 ₽
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-wood text-wood hover:bg-wood hover:text-white"
                  >
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/img/5b7eeb0b-5b12-4939-8c71-940bf8205b9b.jpg"
                  alt="Кухонный гарнитур"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-wood">Кухонный гарнитур</CardTitle>
                <CardDescription>Береза, индивидуальный проект</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-wood">
                    от 80 000 ₽
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-wood text-wood hover:bg-wood hover:text-white"
                  >
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/img/52882761-a888-45f3-a40c-ca97220ec0f4.jpg"
                  alt="Книжный шкаф"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-wood">Книжный шкаф</CardTitle>
                <CardDescription>Орех, современная геометрия</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-wood">
                    от 35 000 ₽
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-wood text-wood hover:bg-wood hover:text-white"
                  >
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-wood">
            Заказать изделие
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-wood">
                Расскажите о вашем проекте
              </CardTitle>
              <CardDescription>
                Опишите желаемое изделие, и мы свяжемся с вами для обсуждения
                деталей
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Тип изделия
                </label>
                <select className="w-full p-2 border rounded-md">
                  <option>Выберите тип изделия</option>
                  <option>Стол</option>
                  <option>Шкаф</option>
                  <option>Кухонный гарнитур</option>
                  <option>Кровать</option>
                  <option>Другое</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Описание проекта
                </label>
                <Textarea
                  placeholder="Опишите желаемое изделие: размеры, материал, стиль, особые пожелания..."
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Примерный бюджет
                </label>
                <select className="w-full p-2 border rounded-md">
                  <option>Выберите бюджет</option>
                  <option>до 20 000 ₽</option>
                  <option>20 000 - 50 000 ₽</option>
                  <option>50 000 - 100 000 ₽</option>
                  <option>100 000 - 200 000 ₽</option>
                  <option>свыше 200 000 ₽</option>
                </select>
              </div>
              <Button className="w-full bg-wood hover:bg-wood-dark">
                <Icon name="Send" size={20} />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-wood text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Icon name="Phone" className="mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p>+7 (999) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" className="mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>info@masterderevo.ru</p>
            </div>
            <div>
              <Icon name="MapPin" className="mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p>г. Москва, ул. Мастеров, 15</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-dark text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="TreePine" size={24} />
            <span className="text-xl font-bold">МастерДерево</span>
          </div>
          <p className="text-wood-light">
            © 2024 МастерДерево. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
