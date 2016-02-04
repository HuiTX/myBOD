{% extends '../layout.swig' %}
{% block title %}拜访记录详情{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/visit/visitInfo.css">
{% endblock %}

{% block content %}
<div class="container" id="visitBefore" v-cloak>
    <div class="row status-bar">
        <a class="goback" href="javascript:history.go(-1);"><span class="glyphicon glyphicon-menu-left"></span></a> 康师傅控股有限公司
    </div>
    {#
    <div class="row banner">
        <img src="../img/partner.png">
        <p class="name">康师傅控股有限公司</p>
        <a class="goback-top" href="javascript:history.go(-1);"><span class="glyphicon glyphicon-menu-left"></span></a>
    </div> #} {#
    <div class="row">
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">
                拜访前
            </div>
        </div>
    </div> #} {#
    <div class="row nav visit-nav">
        <div class="col-xs-6 nav-list active"><a href="/visit/info">拜访前</a></div>
        <div class="col-xs-6 nav-list"><a href="/visit/info">拜访后</a></div>
    </div> #}
    <div class="row">
        <div class="visit-nav">
            <ul>
                <li class="active"><a>拜访前</a></li>
                <li>
                    <a href="/visit/after?id={{ status.id }}" v-if="status.id">拜访后</a>
                    <a class="not-click" v-else>拜访后</a>
                </li>
            </ul>
        </div>
    </div>
    <form id="visitBeforeForm">
            <div class="row section">
                <ul class="display-box-li basic-list">
                    <li><span class="word">拜访对象</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" name="name" data-attr="director_id" v-model="data.director_id">
                                    <option disabled value="">请选择</option>
                                    {% for d in director%}
                                    <option value="{$ d.director_id $}">{$ d.director_name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                    {# <li><span class="word">拜访时间</span>
                        <div class="control">
                            <input type="date" placeholder="请选择" v-model="data.date" v-if="{{ status.id }}">
                            <input type="text" placeholder="请选择" v-model="data.date">
                        </div>
                    </li> #}
                    <li><span class="word">拜访目的</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="purpose" v-model="data.purpose" multiple>
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['vr_purpose']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                    <li><span class="word">拜访形式</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="way" v-model="data.way">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['vr_way']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                    <li><span class="word">关系度</span>
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
                    <li><span class="word">业务阶段</span>
                        <div class="control">
                            <div class=" content">
                                <select class="multipleSelect" data-attr="stage" v-model="data.stage">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['boi_stage']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                <fieldset :disabled="data.state > 0  ">
                    <li><span class="word">培训组织结构</span>
                        <div class="control">
                            <input type="text" placeholder="请输入" v-model="">
                        </div>
                    </li>
                    <li><span class="word">从事培训的人数</span>
                        <div class="control">
                            <input type="text" placeholder="请输入" v-model="">
                        </div>
                    </li>
                    <li><span class="word">目前主要的培训项目</span>
                        <div class="control">
                            <input type="text" placeholder="请输入" v-model="">
                        </div>
                    </li>
                    <li><span class="word">最重视的培训项目</span>
                        <div class="control">
                            <input type="text" placeholder="请输入" v-model="">
                        </div>
                    </li>
                </fieldset>
                </ul>
            </div>
        <div class="row" v-if="data.state < 1">
            <div class="btn-section edit-btn">
                <button type="button" class="btn btn-primary" v-on:click="ckSave">保存</button>
                <a class="btn btn-default" href="javascript:history.go(-1);">取消</a>
            </div>
        </div>
    </form>
</div>




{% endblock %}

{% block script %}
<script src="/js/visit/visitBefore.js"></script>
{% endblock %}
