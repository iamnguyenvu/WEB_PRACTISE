$(document).ready(function() {
    
    function checkUsername() {
        var ref = /^[a-zA-Z0-9_]+$/;
        if ($("#ipUsername").val() == "") {
            $("#errUsername").text("Tên đăng nhập không được để trống!");
            return false;
        } else if (ref.test($("#ipUsername").val()) == false) {
            $("#errUsername").text("Tên đăng nhập không hợp lệ!");
            return false;
        } else {
            $("#errUsername").text("");
            return true;
        }
    }
    $("#ipUsername").blur(checkUsername);

    function checkPassword() {
        var password = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.{8,})/;
        if ($("#ipPassword").val() === "") {
            $("#errPassword").text("Mật khẩu không được để trống!");
            return false;
        } else if ($("#ipPassword").val().length < 8 || !password.test($("#ipPassword").val())) {
            $("#errPassword").text("Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, số và ký tự đặc biệt!");
            return false;
        } else {
            $("#errPassword").text("");
            return true;
        }
    }
    $("#ipPassword").blur(checkPassword);

    function checkRetypePassword() {
        const password = $("#ipPassword").val();
        const retypePassword = $("#ipRetypePassword").val();
        const retypePasswordError = $("#errRetypePassword");

        if (retypePassword === "") {
            retypePasswordError.text("Vui lòng nhập lại mật khẩu.");
            return false;
        } else if (retypePassword !== password) {
            retypePasswordError.text("Mật khẩu không khớp.");
            return false;
        } else {
            retypePasswordError.text("");
            return true;
        }
    }
    $("#ipRetypePassword").blur(checkRetypePassword);

    function checkFullName() {
        const fullName = $("#ipFullName").val();
        const fullNameError = $("#errFullName");

        if (fullName === "") {
            fullNameError.text("Họ và tên không được để trống.");
            return false;
        } else {
            fullNameError.text("");
            return true;
        }
    }
    $("#ipFullName").blur(checkFullName);

    function checkEmail() {
        const email = $("#ipEmail").val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailError = $("#errEmail");

        if (email === "") {
            emailError.text("Email không được để trống.");
            return false;
        } else if (!emailRegex.test(email)) {
            emailError.text("Email không hợp lệ.");
            return false;
        } else {
            emailError.text("");
            return true;
        }
    }
    $("#ipEmail").blur(checkEmail);

    function checkSDT() {
        const sdt = $("#ipPhoneNumber").val();
        const sdtRegex = /^((09|03|07|08|05)+([0-9]{8}))/g;;
        const sdtError = $("#errPhoneNumber");

        if (sdt === "") {
            sdtError.text("SDT không được để trống.");
            return false;
        } else if (!sdtRegex.test(sdt)) {
            sdtError.text("SDT không hợp lệ.");
            return false;
        } else {
            sdtError.text("");
            return true;
        }
    }
    $("#ipPhoneNumber").blur(checkSDT);

    function showModal(message) {
        $("#modalMessage").text(message);
        $("#myModal").css("display", "block");
    }
      
    function closeModal() {
        $("#myModal").css("display", "none");
    }

    function checkSubmit() {
        if (checkUsername() && checkEmail() && checkSDT() && checkPassword() && checkRetypePassword() && checkFullName()) {
            showModal("Đăng ký thành công!");
        } else {
            showModal("Dữ liệu không hợp lệ!");
        }
    }

    $("#btnSubmit").click(function(event) {
        event.preventDefault();
        checkSubmit();
    });

    $(".close").click(closeModal);

    // Đóng modal khi người dùng click bất kỳ đâu ngoài modal
    $(window).click(function(event) {
        if (event.target == $("#myModal")[0]) {
            closeModal();
        }
    });
});
