import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Mail, Phone, MessageCircle, ArrowRight, Send, CheckCircle, Loader2 } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = '请输入姓名';
    if (!formData.email.trim()) {
      errors.email = '请输入邮箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = '请输入有效的邮箱地址';
    }
    if (!formData.message.trim()) errors.message = '请输入消息内容';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setFormStatus('loading');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const projects = [];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-500">
      {/* 导航栏 */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            olddenf
          </a>
          
          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center space-x-8">
            {['关于', '项目', '联系'].map((item, index) => (
              <a
                key={item}
                href={`#${index === 0 ? 'about' : index === 1 ? 'projects' : 'contact'}`}
                className="relative text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105"
              aria-label="切换深色模式"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
              aria-label="切换深色模式"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
              aria-label="打开菜单"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* 移动端导航菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900/98 backdrop-blur-lg border-t border-slate-200 dark:border-slate-700 shadow-lg">
            <nav className="max-w-5xl mx-auto px-4 py-4 flex flex-col space-y-1">
              {['关于', '项目', '联系'].map((item, index) => (
                <a
                  key={item}
                  href={`#${index === 0 ? 'about' : index === 1 ? 'projects' : 'contact'}`}
                  className="py-3 px-4 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* 英雄区域 */}
        <section id="about" className="min-h-screen flex items-center pt-20 pb-20 md:pt-0">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">可接外包 · 全栈开发</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                你好，我是 <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">olddenf</span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-600 dark:text-slate-400 mt-4">
                全栈开发者
              </p>
              <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mt-2">
                独立承接 · 定制交付
              </p>
              
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                专注轻量级Web应用、小程序、H5定制开发，提供从需求分析到上线交付的全流程服务。
                <br className="hidden md:block" />
                高效沟通，按时交付，售后无忧。
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                >
                  <span>立即咨询</span>
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a 
                  href="#projects" 
                  className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  查看案例
                </a>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                {['React', 'Vue', 'Node.js', 'TypeScript', '小程序', '云部署'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-sm text-slate-600 dark:text-slate-400 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 项目展示 */}
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                项目案例
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                精选商业项目，展示专业开发能力
              </p>
            </div>
            
            {projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-700">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">{project.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{project.description}</p>
                      <a 
                        href={project.link} 
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        查看详情 <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full">
                  <ArrowRight size={28} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">
                  即将上线
                </h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
                  正在整理过往项目案例，敬请期待。如有合作需求，欢迎直接联系。
                </p>
                <a 
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg"
                >
                  预约咨询
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* 联系方式 */}
        <section id="contact" className="py-24">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                联系我
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                有项目需求？欢迎随时沟通，期待与您合作
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* 联系卡片 */}
              <div className="space-y-4">
                {[
                  { icon: Mail, label: '邮箱', value: 'olddenf@163.com', href: 'mailto:olddenf@163.com' },
                  { icon: Phone, label: '电话', value: '15892767268', href: 'tel:15892767268' },
                  { icon: MessageCircle, label: '微信', value: 'dengpei0203', href: null }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 ${!item.href ? 'cursor-default pointer-events-none' : ''}`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={22} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-slate-400 dark:text-slate-500">{item.label}</p>
                      <p className="font-medium text-slate-800 dark:text-slate-100">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* 联系表单 */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-6">
                  发送消息
                </h3>
                
                {formStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle size={56} className="text-green-500 mb-4" />
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                      发送成功
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400">
                      感谢您的留言，我会尽快回复
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white dark:bg-slate-700 border rounded-xl text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${formErrors.name ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 dark:border-slate-600 focus:ring-blue-200 focus:border-blue-400'}`}
                        placeholder="请输入您的姓名"
                      />
                      {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        邮箱 <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white dark:bg-slate-700 border rounded-xl text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${formErrors.email ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 dark:border-slate-600 focus:ring-blue-200 focus:border-blue-400'}`}
                        placeholder="请输入您的邮箱"
                      />
                      {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        项目需求 <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white dark:bg-slate-700 border rounded-xl text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${formErrors.message ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 dark:border-slate-600 focus:ring-blue-200 focus:border-blue-400'}`}
                        placeholder="请简要描述您的项目需求..."
                      />
                      {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          发送中...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          发送消息
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="py-12 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} olddenf · 全栈开发者
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-xs mt-2">
            专注定制开发 · 高效交付
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
