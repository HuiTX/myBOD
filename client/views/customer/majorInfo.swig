{% extends '../layout.swig' %}
{% block title %}负责人信息{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/customer/directorInfo.css">
{% endblock %}

{% block content %}
<div class="container pb60" id="directorInfo" v-cloak>
    <div class="row status-bar">
        <a class="goback" href="javascript:history.go(-1);"><span class="glyphicon glyphicon-menu-left"></span></a> 负责人信息
    </div>
    <form id="directorInfoForm">
            <div class="row basic-main">
                <ul class="display-box-li">
                    <li><span class="glyphicon glyphicon-user"></span><span class="word">姓名</span>
                        <div class="control">
                            <input type="text" name="name" placeholder="请输入" v-model="data.name" :disabled="status.isView">
                        </div>
                    </li>
                    <li><span class="glyphicon glyphicon-earphone"></span><span class="word">电话</span>
                        <div class="control">
                            <a class="a-tel" href="tel:{{ data.phone }}" v-model="data.phone" v-if="status.isView">{{ data.phone }}</a>
                            <input type="number" name="phone" placeholder="请输入" v-model="data.phone" v-else>
                        </div>
                    </li>
                    <li><span class="glyphicon glyphicon-eye-open"></span><span class="word">决策角色</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="role" v-model="data.role">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['boi_role']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="row section">
                <ul class="display-box-li basic-list">
                    <li><span class="word">职位</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="position" v-model="data.position">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['dir_position']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                    <li><span class="word">与我方关系</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="relation" v-model="data.relation">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['boi_relation']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                    <li><span class="word">需求满足度</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="requirement" v-model="data.requirement">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['boi_requirement']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>      
                <fieldset :disabled="status.isView">
                    <li><span class="word">决策特点</span>
                        <div class="control">
                            <input type="text" placeholder="请输入" v-model="">
                        </div>
                    </li>
                    <li><span class="word">如何找到</span>
                        <div class="control">
                            <input type="text" placeholder="请输入" v-model="">
                        </div>
                    </li>
                </fieldset>
                </ul>
            </div>
        <div class="row">
            <div class="btn-section" v-if="status.isView">
                 <a href="/director/info?action=update&id={{ data.id }}" class="btn btn-primary btn-icon-left"><span class="glyphicon glyphicon-edit"></span>编辑</a>
            </div>
            <div class="btn-section edit-btn" v-if="!status.isView">
                <button type="button" class="btn btn-primary" v-on:click="ckSave">保存</button>
                <a class="btn btn-default" href="javascript:history.go(-1);">取消</a>
            </div>
        </div>
        <div class="btn-fix-box">
            <a href="/visit/before?c={{ data.customer_id }}&d={{ data.id}}">新增拜访记录</a>
            <a class="second" href="/visit/personal?c={{ data.customer_id }}&d={{ data.id}}">查看拜访记录</a>
        </div>
    </form>
</div>


{% endblock %}

{% block script %}
<script src="/js/custom/directorInfo.js"></script>
{% endblock %}
