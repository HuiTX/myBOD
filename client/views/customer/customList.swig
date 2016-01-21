{% extends '../layout.swig' %}
{% block title %}客户列表{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/customer/customList.css">
{% endblock %}

{% block content %}
    <div class="container">
        <div class="row banner">
            <img src="./img/banner.png">
            <a class="button" href="#"><span class="glyphicon glyphicon-star"></span>关键商机</a>
        </div>
        <div class="row nav">
            <div class="col-xs-6 nav-list active"><a href="/customList"><span class="icon-info"></span>客户信息</a></div>
            <div class="col-xs-6 nav-list"><a href="/visitList"><span class="icon-visit"></span>拜访记录</a></div>
        </div>
        <div class="row company-list">
            {# <div class="col-xs-12" style="padding:10px 0;"><button type="button" class="btn btn-primary" style="margin-right:10px;"><span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;修改</button></div> #}
            <div class="col-xs-6 col-md-3">
                <div class="company-info">
                    <a href="/editCustomer">
                        <div class="company-add"><span class="rectangle"></span><span class="rectangle rectangle-vertical"></span><p>新增客户信息</p></div>
                    </a>
                </div>
            </div>
            <div class="col-xs-6 col-md-3">
                <div class="company-info">
                    <a href="/customInfo">
                        <div class="company-logo"><img src="./img/client-logo.jpg"></div>
                        <p class="company-name">康师傅控股有限公司</p>
                        <p>负责人：康康康</p>
                        {# <span class="icon-business"></span> #}
                    </a>
                </div>
            </div>
            <div class="col-xs-6 col-md-3">
                <div class="company-info">
                    <a href="/customInfo">
                        <div class="company-logo"><img src="./img/client-logo.jpg"></div>
                        <p class="company-name">康师傅控股有限公司</p>
                        <p>负责人：康康康</p>
                    </a>
                </div>
            </div>
            <div class="col-xs-6 col-md-3">
                <div class="company-info">
                    <a href="#">
                        <div class="company-logo"><img src="./img/client-logo.jpg"></div>
                        <p class="company-name">康师傅控股有限公司</p>
                        <p>负责人：康康康</p>
                        <span class="icon-business"></span>
                    </a>
                </div>
            </div>
            <div class="col-xs-12 more-btn"><button type="button" class="btn btn-primary">更多<span class="glyphicon glyphicon-menu-right"></span><span class="glyphicon glyphicon-menu-right"></span></button></div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <h1 class="client-classify"><span>saleA 的客户</span></h1>
            </div>
        </div>
        <div class="row company-list">
            <div class="col-xs-6 col-md-3">
                <div class="company-info">
                    <a href="#">
                        <div class="company-logo"><img src="./img/client-logo.jpg"></div>
                        <span class="icon-business"></span>
                        <p class="company-name">康师傅控股有限公司</p>
                        <p>负责人：康康康</p>
                    </a>
                </div>
            </div>
            <div class="col-xs-6 col-md-3">
                <div class="company-info">
                    <a href="#">
                        <div class="company-logo"><img src="./img/client-logo.jpg"></div>
                        <p class="company-name">康师傅控股有限公司</p>
                        <p>负责人：康康康</p>
                    </a>
                </div>
            </div>
            <div class="col-xs-12 more-btn"><button type="button" class="btn btn-primary">更多<span class="glyphicon glyphicon-menu-right"></span><span class="glyphicon glyphicon-menu-right"></span></button></div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <h1 class="client-classify"><span>saleB 的客户</span></h1>
            </div>
        </div>
        <div class="row company-list">
            <div class="col-xs-6 col-md-3">
                <div class="company-info">
                    <a href="#">
                        <div class="company-logo"><img src="./img/client-logo.jpg"></div>
                        <p class="company-name">康师傅控股有限公司</p>
                        <p>负责人：康康康</p>
                    </a>
                </div>
            </div>
            <div class="col-xs-6 col-md-3">
                <div class="company-info">
                    <a href="#">
                        <div class="company-logo"><img src="./img/client-logo.jpg"></div>
                        <p class="company-name">康师傅控股有限公司</p>
                        <p>负责人：康康康</p>
                    </a>
                </div>
            </div>
            <div class="col-xs-12 more-btn"><button type="button" class="btn btn-primary">更多<span class="glyphicon glyphicon-menu-right"></span><span class="glyphicon glyphicon-menu-right"></span></button></div>
        </div>
    </div>
{% endblock %}

{% block script %}
<script src="/js/custom.js"></script>
{% endblock %}