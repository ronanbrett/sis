/*
 Copyright (c) 2013, Pixel & Tonic, Inc.
 @license   http://buildwithcraft.com/license Craft License Agreement
 @link      http://buildwithcraft.com
*/
(function(b){var d=Garnish.Base.extend({$form:null,$loginNameInput:null,$loginFields:null,$passwordPaneItem:null,$passwordInput:null,$forgotPasswordLink:null,$rememberMeCheckbox:null,$sslIcon:null,$submitBtn:null,$spinner:null,$error:null,forgotPassword:!1,loading:!1,init:function(){this.$form=b("#login-form");this.$loginNameInput=b("#loginName");this.$loginFields=b("#login-fields");this.$passwordPaneItem=this.$loginFields.children();this.$passwordInput=b("#password");this.$forgotPasswordLink=b("#forgot-password");
this.$sslIcon=b("#ssl-icon");this.$submitBtn=b("#submit");this.$spinner=b("#spinner");this.$rememberMeCheckbox=b("#rememberMe");new Garnish.PasswordInput(this.$passwordInput,{onToggleInput:b.proxy(function(a){this.removeListener(this.$passwordInput,"textchange");this.$passwordInput=a;this.addListener(this.$passwordInput,"textchange","onInputChange")},this)});this.addListener(this.$loginNameInput,"textchange","onInputChange");this.addListener(this.$passwordInput,"textchange","onInputChange");this.addListener(this.$forgotPasswordLink,
"click","onForgetPassword");this.addListener(this.$form,"submit","onSubmit");this.addListener(this.$sslIcon,"mouseover",function(){this.$sslIcon.hasClass("disabled")||this.$submitBtn.addClass("hover")});this.addListener(this.$sslIcon,"mouseout",function(){this.$sslIcon.hasClass("disabled")||this.$submitBtn.removeClass("hover")});this.addListener(this.$sslIcon,"mousedown",function(){this.$sslIcon.hasClass("disabled")||(this.$submitBtn.addClass("active"),this.addListener(Garnish.$doc,"mouseup",function(){this.$submitBtn.removeClass("active");
this.removeListener(Garnish.$doc,"mouseup")}))});this.addListener(this.$sslIcon,"click",function(){this.$submitBtn.click()})},validate:function(){if(this.$loginNameInput.val()&&(this.forgotPassword||6<=this.$passwordInput.val().length))return this.$sslIcon.enable(),this.$submitBtn.enable(),!0;this.$sslIcon.disable();this.$submitBtn.disable();return!1},onInputChange:function(){this.validate()},onSubmit:function(a){a.preventDefault();this.validate()&&(this.$submitBtn.addClass("active"),this.$spinner.removeClass("hidden"),
this.loading=!0,this.$error&&this.$error.remove(),this.forgotPassword?this.submitForgotPassword():this.submitLogin())},submitForgotPassword:function(){var a={loginName:this.$loginNameInput.val()};Craft.postActionRequest("users/forgotpassword",a,b.proxy(function(a,b){"success"==b&&(a.success?new c:this.showError(a.error));this.onSubmitResponse()},this))},submitLogin:function(){var a={loginName:this.$loginNameInput.val(),password:this.$passwordInput.val(),rememberMe:this.$rememberMeCheckbox.prop("checked")?
"y":""};Craft.postActionRequest("users/login",a,b.proxy(function(a,b){if("success"==b)a.success?window.location.href=Craft.getUrl(window.returnUrl):(Garnish.shake(this.$form),this.onSubmitResponse(),this.showError(a.error));else this.onSubmitResponse()},this));return!1},onSubmitResponse:function(){this.$submitBtn.removeClass("active");this.$spinner.addClass("hidden");this.loading=!1},showError:function(a){a||(a=Craft.t("An unknown error occurred."));this.$error=b('<p class="error" style="display:none">'+
a+"</p>").appendTo(this.$form);this.$error.fadeIn()},onForgetPassword:function(a){a.preventDefault();this.$loginNameInput.focus();this.$error&&this.$error.remove();a=parseInt(this.$form.css("margin-top"));var b=this.$loginFields.height();a+=Math.round(b/2);this.$form.animate({marginTop:a},"fast");this.$loginFields.animate({height:0},"fast");this.$submitBtn.addClass("reset-password");this.$submitBtn.attr("value",Craft.t("Reset Password"));this.$submitBtn.enable();this.$sslIcon.remove();this.forgotPassword=
!0;this.validate()}}),c=Garnish.Modal.extend({init:function(){var a=b('<div class="pane email-sent">'+Craft.t("Check your email for instructions to reset your password.")+"</div>").appendTo(Garnish.$bod);this.base(a)},hide:function(){}});new d})(jQuery);

//# sourceMappingURL=login.min.map
