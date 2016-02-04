{% extends '../layout.swig' %}

{% block title %}基本信息{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/customer/customBasic.css">
{% endblock %}

{% block content %}
<div class="container" id="customBasic" v-cloak>
    <form id="customBasicForm">
            <div class="row status-bar">
                <a class="goback" href="javascript:history.go(-1);"><span class="glyphicon glyphicon-menu-left"></span></a> 基本信息
            </div>
            <div class="row basic-main">
                <span class="icon-business" v-if="data.keyBusiness == 1"></span>
                <div class="name" v-bind:class="{ 'inputBorder': !status.isView }">
                    <input type="text" name="name" placeholder="请输入企业名称" v-model="data.name">
                </div>
                <ul class="display-box-li">
                    <li>
                        <span class="glyphicon glyphicon-tasks"></span><span class="word">业务阶段</span>
                        <div class="control">
                            <div class=" content">
                                <select class="multipleSelect" name="stage" data-attr="stage" v-model="data.stage" disabled>
                                    <option disabled value="">请选择</option>
                                    {% for dict in dicts['boi_stage']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-piggy-bank"></span>
                        <span class="word">预算</span>
                        <div class="control">
                            <div class=" content">
                                <select class="multipleSelect" data-attr="budget" v-model="data.budget">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['boi_budget']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-rmb"></span>
                        <span class="word">报价</span>
                        <div class="control">
                            <div class=" content">
                                <select class="multipleSelect" data-attr="price" v-model="data.price">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['boi_price']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                    {#
                    <li><span class="glyphicon glyphicon-stats"></span><span class="word">商机胜算率</span>
                        <div class="control">80%</div>
                    </li> #}
                </ul>
            </div>
            <div class="row section">
                <ul class="display-box-li basic-list">
                    <li><span class="word">地址</span>
                        <div class="control">
                            <input type="text" name="address" placeholder="请输入" v-model="data.address">
                        </div>
                    </li>
                    <li>
                        <span class="word">所属行业</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="industry" v-model="data.industry">
                                    <option disabled value="0">请选择</option>
                                    <option value="2">标准课程</option>
                                    <option value="3">10-20w</option>
                                    <option value="4">10-20w</option>
                                    <option value="5">10-20w</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li><span class="word">年收入</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="income" v-model="data.income">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['cust_income']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                    <li><span class="word">员工总数</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="employees" v-model="data.employees">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['cust_employees']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                    <li><span class="word">客户来源</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="origin" v-model="data.origin">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['cust_origin']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="display-box-li basic-list" v-show="status.isViewAll">
                    <li>
                        <span class="word">采购种类</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="procurement" v-model="data.procurement">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['cust_procurement']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                <fieldset :disabled="status.isView">
                    <li><span class="word">培训组织结构</span>
                        <div class="control">
                            <input type="text" placeholder="请输入">
                        </div>
                    </li>
                    <li><span class="word">从事培训的人数</span>
                        <div class="control">
                            <input type="text" placeholder="请输入">
                        </div>
                    </li>
                    <li><span class="word">主要的培训项目</span>
                        <div class="control">
                            <input type="text" placeholder="请输入">
                        </div>
                    </li>
                    <li><span class="word">最重视的培训项目</span>
                        <div class="control">
                            <input type="text" placeholder="请输入">
                        </div>
                    </li>
                    <li><span class="word">年度培训预算（含线下）</span>
                        <div class="control">
                            <input type="text" placeholder="请输入">
                        </div>
                    </li>
                    <li><span class="word">平台形式</span>
                        <div class="control">
                            <input type="text" placeholder="请输入">
                        </div>
                    </li>
                    <li><span class="word">是否已经有ELN</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect">
                                    <option disabled value="0">请选择</option>
                                    <option value="2">是</option>
                                    <option value="3">否</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li><span class="word">选择的供应商</span>
                        <div class="control">
                            <input type="text" placeholder="请输入">
                        </div>
                    </li>
                </fieldset>
                </ul>
            </div>
        <div class="row">
            <div class="btn-all" v-if="status.action == 'view'" v-on:click="ckViewAll" >
                <a v-show="!status.isViewAll">查看全部<span class="glyphicon glyphicon-menu-down"></span></a>
                <a v-show="status.isViewAll">收起<span class="glyphicon glyphicon-menu-up"></span></a>
            </div>
            <div class="btn-section" v-if="status.action == 'view'">
                <a href="/customer/info/basic?action=update&id={{ data.id }}" class="btn btn-primary btn-icon-left"><span class="glyphicon glyphicon-edit"></span>编辑</a>
            </div>
            <div class="btn-section edit-btn" v-if="status.action != 'view'">
                <button type="button" class="btn btn-primary" v-on:click="ckSave">保存</button>
                <a class="btn btn-default" href="javascript:history.go(-1);">取消</a>
            </div>
        </div>
    </form>
</div>




{% endblock %} {% block script %}
<script src="/js/custom/customBasic.js"></script>
{% endblock %}
