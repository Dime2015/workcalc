document.addEventListener('DOMContentLoaded', function() {
    // DOM元素
    const questionContainer = document.getElementById('question-container');
    const progressBar = document.getElementById('progress-bar');
    const submitBtn = document.getElementById('submit-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionnaire = document.getElementById('questionnaire');
    const resultsContainer = document.getElementById('results');
    const resultContent = document.getElementById('result-content');
    const controlsDiv = document.getElementById('controls');
    const scrollTopBtn = document.getElementById('scroll-top');

    // 实际问题数据
    const questions = [
        {
            id: 1,
            text: "在和朋友的旅行中，你通常是？",
            options: [
                { text: "A. 人出门，脑子里留在家里", value: 1 },
                { text: "B. 不爱出主意，但是喜欢行使否决权", value: 2 },
                { text: "C. 有个大概每天干嘛，但具体安排听老天的", value: 3 },
                { text: "D. 每一天的几点几分几秒，我需要知道我在地球上的坐标", value: 4 }
            ]
        },
        {
            id: 2,
            text: "在学习一项全新的、复杂的技能时（比如一门外语、编程或乐器），你倾向于？",
            options: [
                { text: "A. 第一反应往往是直接对标这个领域的世界顶级，看看他/她怎么走到今天的", value: 1 },
                { text: "B. 铁公鸡型学生，尽一切可能收集免费资料自学，甚至再把资料转手赚点儿", value: 2 },
                { text: "C. 兜兜转转，东问问西打听，但最后大概率是花钱报个网课", value: 3 },
                { text: "D. 必须找个学校，拉个朋友一起学，学什么不重要，要的是个气氛", value: 4 }
            ]
        },
        {
            id: 3,
            text: "如果周末突然有一个完全空闲、没有任何计划的一天，你会？",
            options: [
                { text: "A. 我长这么大还没有过这么个一天", value: 1 },
                { text: "B. 几乎很难闲下来，闲了一天那就感觉这天白过了", value: 2 },
                { text: "C. 有一套自己熟悉的消遣方式，看剧，看书，逛街，聊天", value: 3 },
                { text: "D. 上班", value: 4 }
            ]
        },
        {
            id: 4,
            text: "回顾你的成长经历，你认为父母或周围环境如何对待你？",
            options: [
                { text: "A. 世界的兴趣好像就是干我，我常常怀疑我是魔童降世", value: 1 },
                { text: "B. 总的来说，我在用命运书写苦难", value: 2 },
                { text: "C. 不谦虚的说，顺顺的一生", value: 3 },
                { text: "D. 周围的人总说我运气好，别说，还真是！", value: 4 }
            ]
        },
        {
            id: 5,
            text: "对于规则和传统（无论是社会习俗、家庭规矩还是游戏规则），你的态度更接近？",
            options: [
                { text: "A. 破坏！破坏！", value: 1 },
                { text: "B. 能不遵守的时候不会犹豫，规则是限制弱者的", value: 2 },
                { text: "C. 破坏规则时，哪怕没人看到，心里也虚虚的", value: 3 },
                { text: "D. 别说我，别人不遵守规则，我都能气个半死", value: 4 }
            ]
        },
        {
            id: 6,
            text: "当你面对一个重要的个人选择，且信息不完全时（比如选择专业、搬到一个新城市），你会？",
            options: [
                { text: "A. 收集整个宇宙的信息，恨不得给楼下的野猫做个访谈", value: 1 },
                { text: "B. 尽可能收集信息再做判断", value: 2 },
                { text: "C. 想问各种前辈，长辈，父母，顺着他们意思来", value: 3 },
                { text: "D. 一般听妈的，妈忙的话，听爸的也行", value: 4 }
            ]
        },
        {
            id: 7,
            text: "假设你攒了一笔钱，用于非必需的梦想基金，你会倾向于用它来？",
            options: [
                { text: "A. 咦，昨天好像刚听说一个极好的项目来着", value: 1 },
                { text: "B. 想办法搞点之前没搞过的，反正不要钱", value: 2 },
                { text: "C. 先存着吧，一辈不时之需", value: 3 },
                { text: "D. 40年超长期国债买起～", value: 4 }
            ]
        },
        {
            id: 8,
            text: "当你遇到一件让你沮丧或失败的事情时，你更倾向于？",
            options: [
                { text: "A. 5秒之后就忘了", value: 1 },
                { text: "B. 收拾收拾心情，重新出发", value: 2 },
                { text: "C. 和亲朋好友诉诉苦，让时间帮助我忘记", value: 3 },
                { text: "D. 我还记得5岁那年幼儿园中班骂我是胖头鱼的那个婊子", value: 4 }
            ]
        },
        {
            id: 9,
            text: "在社交或团队活动中，你通常扮演的角色是？",
            options: [
                { text: "A. Leader, Alpha, King, The one", value: 1 },
                { text: "B. 狗头军师类型的角色，不是领导，仿佛又是领导", value: 2 },
                { text: "C. 有熟悉的人在场就high一点，否则就是小透明", value: 3 },
                { text: "D. That guy in gray hoodie", value: 4 }
            ]
        },
        {
            id: 10,
            text: "对于未来的生活，你更看重的是？",
            options: [
                { text: "A. 变化，我需要无限的可能性", value: 1 },
                { text: "B. 希望，总要有点和现在不一样的盼头", value: 2 },
                { text: "C. 安全，无论如何，我只希望有的越来越多", value: 3 },
                { text: "D. 稳定，今天的生活，我可以重复过一千年", value: 4 }
            ]
        }
    ];

    // 结果类型
    const resultTypes = [
        {
            minScore: 10,
            maxScore: 15,
            title: "极其不适合上班 / 强烈倾向独立",
            description: "你和班其实本不应该同时出现在这个世界上，这一切都是一个错误。工资，是撒旦曾购买过你灵魂的证明。你注定不属于某个组织，如果一定要属于某个组织，你需要亲手创建那个组织，如果一定得服从某个规则，你终会亲手破坏那个规则。"
        },
        {
            minScore: 16,
            maxScore: 21,
            title: "比较不适合上班 / 倾向独立",
            description: "上班确实有点太难为你了，但是听哥一句，这世道，这环境，不上班咱又能干啥呢？什么，你已经有主意了，那好吧，愿上帝祝你好运。"
        },
        {
            minScore: 22,
            maxScore: 27,
            title: "适应性强 / 两者皆可",
            description: "还记得李小龙的教导吗，be water, my friend。 你就是公司门口的那滩水，风大点儿，你也就被吹进去上班了，没风的时候，也不影响你躺着晒晒太阳。"
        },
        {
            minScore: 28,
            maxScore: 33,
            title: "比较适合上班",
            description: "你比较适合上班，可能你还在组织外面的世界兜兜转转，可能你已经阅尽千帆归来坐回了工位上，不管你是哪一种，答应我，别再离开工位好吗？"
        },
        {
            minScore: 34,
            maxScore: 40,
            title: "极其适合上班",
            description: "你的故乡是不是班加罗尔，抑或是布里斯班，还是班达尔斯里贝加湾？从小我看你就是一个上班的奇才，一脸体制内的样子，浑身上下都透着一股班味儿。举手投足间，都隐约能看到20年后在Excel和PPT之间纵横睥睨的班之王者。"
        }
    ];

    // 用户回答
    let answers = new Array(questions.length).fill(null);
    // 是否已显示结果
    let resultShown = false;

    // 显示所有问题
    function displayAllQuestions() {
        progressBar.style.width = '100%';
        
        // 创建所有问题的HTML
        let questionsHTML = '';
        
        questions.forEach((question, index) => {
            questionsHTML += `
                <div class="question" id="question-${question.id}">
                    <h3>${index + 1}. ${question.text}</h3>
                    <div class="options">
                        ${question.options.map((option, optIndex) => `
                            <label class="option ${answers[index] === option.value ? 'selected' : ''}">
                                <input type="radio" name="question-${question.id}" value="${option.value}" ${answers[index] === option.value ? 'checked' : ''}>
                                ${option.text}
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        // 更新问题容器
        questionContainer.innerHTML = questionsHTML;
        
        // 更新控制区
        controlsDiv.innerHTML = `
            <button id="submit-btn" class="btn">${resultShown ? '更新结果' : '查看结果'}</button>
        `;
        
        // 如果已经隐藏了结果区，则重新隐藏
        if (!resultShown) {
            resultsContainer.style.display = 'none';
        }
        
        // 重新获取提交按钮
        const submitBtn = document.getElementById('submit-btn');
        
        // 添加选项点击事件
        const optionElements = document.querySelectorAll('.option');
        optionElements.forEach(option => {
            option.addEventListener('click', function() {
                const radio = this.querySelector('input[type="radio"]');
                radio.checked = true;
                
                // 获取问题索引
                const questionId = parseInt(radio.name.split('-')[1]);
                const questionIndex = questions.findIndex(q => q.id === questionId);
                
                // 移除当前问题的其他选项的selected类
                const currentQuestionOptions = document.querySelectorAll(`input[name="question-${questionId}"]`);
                currentQuestionOptions.forEach(input => {
                    input.parentElement.classList.remove('selected');
                });
                
                // 给当前选中的选项添加selected类
                this.classList.add('selected');
                
                // 保存用户回答
                answers[questionIndex] = parseInt(radio.value);
                
                // 如果有未回答高亮的问题，移除高亮
                const questionElement = document.getElementById(`question-${questionId}`);
                if (questionElement.classList.contains('unanswered')) {
                    questionElement.classList.remove('unanswered');
                }
            });
        });
        
        // 添加提交按钮事件
        submitBtn.addEventListener('click', function() {
            // 检查是否所有问题都已回答
            const allAnswered = answers.every(answer => answer !== null);
            
            if (allAnswered) {
                showResults();
                // 滚动到结果区域
                resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                alert('请回答所有问题后再提交');
                // 高亮未回答的问题
                answers.forEach((answer, index) => {
                    if (answer === null) {
                        const questionElement = document.getElementById(`question-${questions[index].id}`);
                        questionElement.classList.add('unanswered');
                        // 滚动到第一个未回答的问题
                        if (index === answers.findIndex(a => a === null)) {
                            questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }
                });
            }
        });
    }

    // 计算结果
    function calculateResult() {
        const totalScore = answers.reduce((sum, value) => sum + value, 0);
        
        // 查找对应分数范围的结果
        const result = resultTypes.find(r => totalScore >= r.minScore && totalScore <= r.maxScore);
        
        return {
            score: totalScore,
            result: result
        };
    }

    // 显示结果
    function showResults() {
        const calculatedResult = calculateResult();
        
        resultContent.innerHTML = `
            <h3>${calculatedResult.result.title}</h3>
            <p class="result-description">${calculatedResult.result.description}</p>
            <div class="friend-invitation" style="margin-top: 2rem; padding-top: 1rem; border-top: 1px dashed #e0e0e0;">
                <p style="text-align: center; font-size: 1.1rem; margin-bottom: 1rem;">如果你也在日本东京，觉得这个还挺有意思的话，来和我交朋友吧。</p>
                <img src="1.jpeg" alt="交友邀请" style="max-width: 200px; height: auto; margin: 0 auto; display: block; border-radius: 5px;">
            </div>
        `;
        
        // 显示结果容器，但不隐藏问卷
        resultsContainer.style.display = 'block';
        resultShown = true;
        
        // 更新提交按钮文本
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
            submitBtn.textContent = '更新结果';
        }
    }

    // 注册重新开始事件监听器
    restartBtn.addEventListener('click', function() {
        answers = new Array(questions.length).fill(null);
        resultShown = false;
        
        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // 重新加载问题
        displayAllQuestions();
    });
    
    // 返回顶部按钮功能
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 初始化显示所有问题
    displayAllQuestions();
}); 