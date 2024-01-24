$(document).ready(function () {

    

    $(".container1").css({
        overflowX: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20px',
        width: '100%',
        background: '#000'
    });

    $(".titlePage").css({
        position: 'fixed',
        textAlign: 'right',
        marginRight: '1100px',
        minHeight: '300px',
        height: '500px',
        zIndex: 999,
        transform: 'translateX(1400px)'
    
    });

    $(".artworks").css({
        border: '1px solid #000',
        margin: '5px',
        width:'100%',
        maxWidth:'300px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: '0.3s',
        border: '1px #000',
    });

    
    $(".close").css({
        position: 'absolute',
        top: '15px',
        right: '35px',
        color: '#f1f1f1',
        fontSize: '40px',
        fontWeight: 'bold',
        transition: '0.3s'
    });

    $(".modal-content").css({
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        margin: 'auto',
        left: '0px',
        width: '70%',
        padding: '20px',
        maxWidth: '100%',
        top: '50px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxHeight: '100%'
    });

    $(".modal-content img").css({

        maxWidth: '50vw',
        maxHeight: '80vh'
    });

    $("#caption").css({

        position: 'relative',
        top: '0',
        color: '#ccc',
        padding: '30px',
        boxSizing: 'border-box',
        width: '20%',
        whiteSpace: 'nowrap',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        textAlign: 'left'
    });
    
    
    $("a").css({
        textDecoration: 'none',
        color: 'inherit'
    });
    

    $(".nav").css({
        margin: '40px',
        webkitTextSizeAdjust: '100%',
        height: '660px',
        
    });

    

    
});