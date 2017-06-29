

;$(function () {
    $('#dowebok').fullpage({
        scrollingSpeed: 1000,//滑动速度
        anchors: ['page1', 'page2', 'page3', 'page4'],//锚点
        navigation: true,
        navigation: 'right',
        navigationTooltips: ['个人简介', '个人技能', '项目经验', '工作经历'],//右侧圆点内容
        showActiveTooltip: true,
        verticalCentered: false,//垂直居中
        sectionsColor: ['#856ded', 'turquoise', 'lightcoral', '#eb59a2'],//背景色
        continuousVertical: true,
        menu: '#menu'   //绑定菜单

    })


    console.warn('联系我吧!')
    console.warn('QQ:670979188')
    console.warn('电话:13143526220')
    console.warn('email: dengshenkk@gmail.com')


})
