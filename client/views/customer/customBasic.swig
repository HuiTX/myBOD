{% extends '../layout.swig' %}
{% block title %}基本信息{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/customer/customBasic.css">
{% endblock %}

{% block content %}
    <div class="container">
        <div class="row status-bar">
            <a class="goback" href="/customInfo"><span class="glyphicon glyphicon-menu-left"></span></a>
            基本信息
        </div>
        <div class="row basic-main">
            <span class="icon-business"></span>
            <h2 class="name">康师傅控股有限公司</h2>
            <ul class="display-box-li">
                <li><span class="glyphicon glyphicon-tasks"></span><span class="word">业务阶段</span><p class="control">初步想法</p></li>
                <li><span class="glyphicon glyphicon-rmb"></span><span class="word">预算</span><p class="control">50-100万</p></li>
                <li><span class="glyphicon glyphicon-stats"></span><span class="word">商机胜算率</span><p class="control">80%</p></li>
                <li><span class="glyphicon glyphicon-tag"></span><span class="word">采购种类</span><p class="control">标准课程</p></li>
            </ul>
        </div>
        <div class="row section">
            <ul class="display-box-li basic-list">
                <li><span class="word">所属行业</span><p class="control">快消行业</p></li>
                <li><span class="word">地址</span><p class="control">福建省福建省福建省福建省福建省福建省福建省福建省福建省福建省福建省</p></li>
                <li><span class="word">年收入</span><p class="control">80</p></li>
                <li><span class="word">员工总数</span><p class="control">80</p></li>
                <li><span class="word">培训组织结构</span><p class="control">80</p></li>
                <li><span class="word">从事培训的人数</span><p class="control">80</p></li>
                <li><span class="word">主要的培训项目</span><p class="control">80</p></li>
                <li><span class="word">最重视的培训项目</span><p class="control">80</p></li>
                <li><span class="word">年度培训预算（含线下）</span><p class="control">80</p></li>
                <li><span class="word">平台形式</span><p class="control">80</p></li>
                <li><span class="word">是否已经有ELN</span><p class="control">80</p></li>
                <li><span class="word">选择的供应商</span><p class="control">80</p></li>
            </ul>
            <div class="col-xs-12 btn-section"><button type="button" class="btn btn-default btn-icon-right">查看全部<span class="glyphicon glyphicon-menu-down"></span></button></div>
        </div>
    </div>
{% endblock %}


