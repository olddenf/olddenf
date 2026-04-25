import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Mail, ArrowRight } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const projects = [
    {
      id: 1,
      title: "项目 1",
      description: "这是一个示例项目描述，展示了我在前端开发方面的技能。",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20web%20application%20interface&image_size=landscape_16_9",
      link: "#"
    },
    {
      id: 2,
      title: "项目 2",
      description: "这是另一个示例项目描述，展示了我在UI/UX设计方面的能力。",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=creative%20website%20design&image_size=landscape_16_9",
      link: "#"
    },
    {
      id: 3,
      title: "项目 3",
      description: "这是第三个示例项目描述，展示了我在响应式设计方面的专长。",
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=responsive%20web%20design&image_size=landscape_16_9",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* 导航栏 */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary-500 dark:text-primary-400">Portfolio</a>
          
          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">关于我</a>
            <a href="#projects" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">项目</a>
            <a href="#contact" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">联系我</a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="切换深色模式"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="切换深色模式"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="打开菜单"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* 移动端导航菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a 
                href="#about" 
                className="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                关于我
              </a>
              <a 
                href="#projects" 
                className="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                项目
              </a>
              <a 
                href="#contact" 
                className="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                联系我
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* 英雄区域 */}
        <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600">
                  你好，我是 [你的名字]
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10">
                  前端开发者 & UI/UX 设计师
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
                  专注于创建美观、响应式的网站和应用程序，致力于提供卓越的用户体验。
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="#projects" 
                    className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors hover-scale"
                  >
                    查看我的项目
                  </a>
                  <a 
                    href="#contact" 
                    className="px-8 py-3 border border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-lg transition-colors hover-scale"
                  >
                    联系我
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 项目展示 */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">我的项目</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                这里展示了我最近完成的一些项目，展示了我的技能和创意。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow hover-scale fade-in delay-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      查看详情 <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">联系我</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-12">
                  如果您有任何问题或合作意向，请随时与我联系。
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                  <a 
                    href="mailto:your.email@example.com" 
                    className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover-scale flex items-center"
                  >
                    <Mail size={20} className="text-primary-500 mr-2" /> 邮箱
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover-scale"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover-scale"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover-scale"
                  >
                    Twitter
                  </a>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-6">发送消息</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">姓名</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">邮箱</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">消息</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors hover-scale"
                    >
                      发送消息
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2026 [你的名字]. 保留所有权利。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;