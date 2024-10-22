import React, { useState } from 'react'
import { Typography, Avatar, Card, CardHeader, CardActions, CardContent, CardMedia, IconButton, Dialog, DialogActions, DialogTitle } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import '../App.css'

function Noticia({ title, date, avatarURL, imageURL, imageSize, text, numberLikes, descriptionAvatar, descriptionImage }) {

    // Estado para controlar si el diálogo está abierto o cerrado
    const [open, setOpen] = React.useState(false);

    // Función para abrir el diálogo (cambiar el estado de "open" a true)
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Función para cerrar el diálogo (cambiar el estado de "open" a false)
    const handleClose = () => {
        setOpen(false);
    };

    // Estado para controlar si se ha dado "me gusta"
    const [liked, setLiked] = useState(false);

    // Función para cambiar el estado al hacer clic en el icono de "me gusta"
    const handleLike = () => {
        setLiked(!liked);
    };

    // Función para enviar el mensaje de WhatsApp o Telegram
    const handleShare = (application) => {
        if (application === 'whatsApp') {
            console.log('Enviando por WhatsApp...'); // Mostrar solo el mensaje de WhatsApp
        } else if (application === 'telegram') {
            console.log('Enviando por Telegram...'); // Mostrar solo el mensaje de Telegram
        }
        setOpen(false); // Cierra el diálogo
    };

    return (
        <>

            <Card
                sx={{
                    maxWidth: 500,
                    border: '2px solid black',
                    mb: 3,
                    ':last-child': { mb: 0 } // elimina el margen inferior para el último Card
                }}
            >

                <CardHeader
                    avatar={<Avatar src={avatarURL} alt={descriptionAvatar} />}
                    title={title}
                    subheader={date}
                    icon={<IconButton><MoreVertIcon /></IconButton>}
                />

                <CardMedia
                    sx={{ height: imageSize }}
                    image={imageURL}
                    alt={descriptionImage}
                />

                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                        {text}
                    </Typography>
                </CardContent>


                <CardActions>
                    {numberLikes}
                    <IconButton onClick={handleLike}>
                        {liked === true ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon sx={{ color: 'black' }} />}
                    </IconButton>
                    <IconButton onClick={handleClickOpen} disabled={!liked}>
                        <ShareIcon />
                    </IconButton>
                </CardActions>


            </Card>

            <React.Fragment>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"¿A través de qué plataforma quieres compartir?"}
                    </DialogTitle>

                    <DialogActions>
                        <IconButton onClick={() => handleShare('whatsApp')}>
                            <WhatsAppIcon />
                        </IconButton>
                        <IconButton onClick={() => handleShare('telegram')}>
                            <TelegramIcon />
                        </IconButton>
                    </DialogActions>
                </Dialog>

            </React.Fragment>
        </>
    )
}

export default Noticia