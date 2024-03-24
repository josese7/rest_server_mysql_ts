import { Request, Response } from "express";
import User from "../models/user";


export const getUsers = async (req: Request, res: Response) => {
        
        const users = await User.findAll();
        res.status(200).json({
            msg:'Lista de usuarios',
            data: {users},
            error:false
        })
}

export const getUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id)

    if (!user){
        res.status(404).json({
            msg:'No existe un usuario con el id = ' + id,
            data: {},
            error: false
        })
    }
    res.status(200).json({
        msg:'getUsers',
        data: {user}
    })
}

export const postUser = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        const user =   User.create(body)

        //User.build()

        //await user.save()
        
        res.status(200).json({
            msg:'Usuario creado',
            data: {user},
            error: false
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'Error del servidor',
            data: {},
            error: true
        })
    }

    res.status(200).json({
        msg:'postUsers',
        data: {body}
    })
}

export const putUser = (req: Request, res: Response) => {

    const {id} = req.params
    const { body } = req;
    res.status(200).json({
        msg:'putUsers',
        data: {body, id}
    })
}

export const deleteUser = (req: Request, res: Response) => {

    const {id} = req.params
   
    res.status(200).json({
        msg:'deleteUsers',
        data: { id}
    })
}