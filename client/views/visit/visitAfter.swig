{% extends '../layout.swig' %}
{% block title %}拜访记录详情{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/visit/visitInfo.css">
{% endblock %}

{% block content %}
<div class="container" id="visitAfter" v-cloak>
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
                <li><a href="/visit/before?id={{ status.id }}">拜访前</a></li>
                <li class="active" ><a>拜访后</a></li>
            </ul>
        </div>
    </div>
    <form id="visitAfterForm">
            <div class="row section">
                <ul class="display-box-li basic-list">
                    <li><span class="word">费用</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="cost" v-model="data.cost">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['vr_cost']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                    <li><span class="word">客户承诺</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="promise" v-model="data.promise">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['vr_promise']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                    <li><span class="word">协同拜访人</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect">
                                    <option disabled value="0">请选择</option>
                                </select>
                            </div>
                            {# <div class="content">
                                <select class="multipleSelect" data-attr="partner" v-model="data.partner">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['vr_purpose']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div> #}
                        </div>
                    </li>
                    <li><span class="word">合同促进度</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="result" v-model="data.result">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['vr_result']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li>
                    <li><span class="word">完成时间</span>
                        <div class="control">
                            <input type="date" placeholder="请选择" v-model="data.date" v-model="data.date" v-if="data.state == 1">
                            <input type="text" placeholder="请选择" v-model="data.date" v-else>
                        </div>
                    </li>
                    <li><span class="word">下一步骤</span>
                        <div class="control">
                            <div class="content">
                                <select class="multipleSelect" data-attr="next" v-model="data.next">
                                    <option disabled value="0">请选择</option>
                                    {% for dict in dicts['vr_next']%}
                                    <option value="{$ dict.id $}">{$ dict.name $}</option>
                                    {% endfor %}
                                </select>
                            </div>
                        </div>
                    </li> 
                </ul>
            </div>
        <div class="row" v-if="data.state == '1'">
            <div class="btn-section edit-btn">
                <button type="button" class="btn btn-primary" v-on:click="ckSave">保存</button>
                <a class="btn btn-default" href="javascript:history.go(-1);">取消</a>
            </div> 
        </div>
    </form>
</div>



{% endblock %}

{% block script %}
<script src="/js/visit/visitAfter.js"></script>
{% endblock %}
