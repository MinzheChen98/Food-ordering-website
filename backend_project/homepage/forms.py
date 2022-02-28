class UserForm(forms.ModelForm):
    class Meta:
        model = User
        widgets = {
        'password': forms.PasswordInput(),
    }