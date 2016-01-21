{% extends '../layout.swig' %}
{% block title %}客户信息{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/customer/customInfo.css">
{% endblock %}

{% block content %}
<div class="container pb60">
    <div class="row banner">
        <img src="./img/banner.png">
        <p class="name">康师傅控股有限公司</p>
        <a class="button" href="/editCustomer"><span class="glyphicon glyphicon-pencil"></span>编辑</a>
    </div>
    <div class="row section">
        <div class="col-xs-12">
            <h2 class="title">
                <a href="/customBasic">基本信息<span class="glyphicon glyphicon-menu-right"></span></a>
            </h2>
        </div>
        <div class="col-xs-12">
            <a class="customer-basic" href="#">
                <p>采购种类：标准课程</p>
                <ul class="labels">
                    <li class="l-bus">关键商机</li>
                    <li>初步想法</li>
                    <li>80w</li>
                </ul>
            </a>
        </div>
    </div>
    <div class="row section">
        <div class="col-xs-12">
            <h2 class="title">
                <a href="#">负责人<span class="glyphicon glyphicon-menu-right"></span></a>
            </h2>
        </div>
        <div class="col-xs-6 col-md-3">
            <div class="detail-box">
                <a href="#">
                    <h6 class="name">李经理</h6>
                    <a class="tel" href="tel:0592:2365235">0952:2641254</a>
                    <p class="role">决策者</p>
                </a>
            </div>
        </div>
        <div class="col-xs-6 col-md-3">
            <div class="detail-box">
                <a href="#">
                    <h6 class="name">李经理</h6>
                    <a class="tel" href="tel:15921052526">15921052526</a>
                    <p class="role">决策者</p>
                </a>
            </div>
        </div>
    </div>  
    <div class="row section">
        <div class="col-xs-12">
            <h2 class="title">
                <a href="#">竞争对手<span class="glyphicon glyphicon-menu-right"></span></a>
            </h2>
        </div>
        <div class="col-xs-6 col-md-3">
            <div class="detail-box">
                <a href="#">
                    <h6 class="company-name">康师傅控股有限公司</h6>
                    <p class="advantage">这里填与网龙相比对方的优势</p>
                </a>
            </div>
        </div>
        <div class="col-xs-6 col-md-3">
            <div class="detail-box">
                <a href="#">
                    <h6 class="company-name">康师傅控股有限公司</h6>
                    <p class="advantage">这里填与网龙相比对方的优势</p>
                </a>
            </div>
        </div>
    </div>       
    <div class="btn-box">
        <a href="#">拜访记录</a>
        <a href="#">申请进入关键商机</a>
    </div>
</div>
{% endblock %}
