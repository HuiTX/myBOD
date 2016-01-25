{% extends '../layout.swig' %}
{% block title %}编辑{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/customer/editCustomer.css">
{% endblock %}

{% block content %}
    <div class="container">
        <div class="row status-bar">
            <a class="goback" href="/customInfo"><span class="glyphicon glyphicon-menu-left"></span></a>
            编辑
        </div>
        <div class="row section">
            <ul class="display-box-li edit-list">
                <li>
                    <div class="control"><input type="text" placeholder="请输入企业名称"></div>
                </li>
                <li>
                    <div class="control"><input type="text" placeholder="请输入地址"></div>
                </li>
                <li>
                    <div class="control"><input type="text" placeholder="请输入所属行业"></div>
                </li>
            </ul>
        </div>
        <div class="row section">
            <p class="add-bar">添加负责人信息</p>
        </div>
        <div class="row section">
            <p class="add-bar">添加竞争对手信息</p>
        </div>
        <div class="row section">
            <ul class="display-box-li edit-list">
                <li>
                    <span class="word">业务阶段</span>
                    <div class="control"><input type="text" placeholder="请输入"></div>
                </li>
                <li>
                    <span class="word">预算</span>
                    <div class="control"><input type="text" placeholder="请输入"></div>
                </li>
                <li>
                    <span class="word">商机胜算率</span>
                    <div class="control"><input type="text" placeholder="请输入"></div>
                </li>
                <li>
                    <span class="word">采购种类</span>
                    <div class="control">
                        <select>
                            <option>种类1</option>
                            <option>种类2</option>
                            <option>种类3</option>
                        </select>
                    </div>
                    <span class="glyphicon glyphicon-menu-right"></span>
                </li>
                <li>
                    <span class="word">年收入</span>
                    <div class="control"><input type="text" placeholder="请输入"></div>
                </li>
                <li>
                    <span class="word">员工总数</span>
                    <div class="control"><input type="text" placeholder="请输入"></div>
                </li>
                <li>
                    <span class="word">培训组织结构</span>
                    <div class="control"><input type="text" placeholder="请输入"></div>
                </li>
                <li>
                    <span class="word">从事培训的人数</span>
                    <div class="control"><input type="text" placeholder="请输入"></div>
                </li>
                <li>
                    <span class="word">主要的培训项目</span>
                    <div class="control"><input type="text" placeholder="请输入"></div>
                </li>
                <li>
                    <span class="word">最重视的培训项目</span>
                    <div class="control"><input type="text" placeholder="请输入"></div>
                </li>
                <li>
                    <span class="word">年度培训预算（含线下）</span>
                    <div class="control"><input type="text" placeholder="请输入"></div>
                </li>
                <li>
                    <span class="word">平台形式</span>
                    <div class="control"><input type="text" placeholder="请输入"></div>
                </li>
                <li>
                    <span class="word">是否已经有ELN</span>
                    <div class="control"><input type="text" placeholder="请输入"></div>
                </li>
                <li>
                    <span class="word">选择的供应商</span>
                    <div class="control"><input type="text" placeholder="请输入"></div>
                </li>
            </ul>
        </div>
        <div class="row btn-section edit-btn">
            <button type="button" class="btn btn-primary">保存</button>
            <button type="button" class="btn btn-default">取消</button>
        </div>
    </div>
{% endblock %}

{% block script %}
<script src="/vendor/validator/jquery.validator.js"></script>
<script src="/vendor/validator/local/zh_CN.js"></script>
{% endblock %}