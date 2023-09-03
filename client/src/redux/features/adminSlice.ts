import { createSlice } from "@reduxjs/toolkit";
import adminActions from "./adminActions";
import { toast } from 'react-toastify'

interface UserType {
    name: string,
    _id: string,
    image: string,
    email: string,
    status: string
}

interface MentorsType {
    firstName: string,
    lastName: string,
    _id: string,
    image: string,
    email: string,
    category: string,
    status: string
}

interface InitialState {
    loading: boolean,
    error: boolean,
    admin: {
        name: string,
        email: string,
        _id: string,
        image: string
    },
    users: UserType[]
    mentors: MentorsType[]
    user: UserType,
    mentor: MentorsType
}

const initialState: InitialState = {
    loading: false,
    error: false,
    admin: {
        _id: "",
        email: "",
        image: "",
        name: ""
    },
    users: [],
    mentors: [],
    user: {
        _id: "string",
        email: "",
        image: "",
        name: "",
        status: ""
    },
    mentor: {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        category: "",
        image: "",
        status: ""
    }
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        updateUser: (state, { payload }) => {
            state.user = { ...state.user, [payload.name]: payload.value }
        },
        updateMentor: (state, { payload }) => {
            state.mentor = { ...state.mentor, [payload.name]: payload.value }
        }
    },
    extraReducers(builder) {
        //get 
        builder.addCase(adminActions.adminGet.fulfilled, (state, { payload }) => {
            state.loading = false
            state.error = false
            state.admin = payload?.admin
        })
        builder.addCase(adminActions.adminGet.pending, (state) => {
            state.loading = true
            state.error = false
        })
        builder.addCase(adminActions.adminGet.rejected, (state, { payload }) => {
            state.loading = false
            state.error = true
            toast.error((payload as { message: string })?.message)
        })
        //get
        // users get all
        builder.addCase(adminActions.userGetAll.fulfilled, (state, { payload }) => {
            state.loading = false
            state.error = false
            state.users = payload?.users
        })
        builder.addCase(adminActions.userGetAll.pending, (state) => {
            state.loading = true
            state.error = false
        })
        builder.addCase(adminActions.userGetAll.rejected, (state, { payload }) => {
            state.loading = false
            state.error = true
            toast.error((payload as { message: string })?.message)
        })
        // users get all

        // user get
        builder.addCase(adminActions.userGet.fulfilled, (state, { payload }) => {
            state.loading = false
            state.error = false
            state.user = payload?.user
        })
        builder.addCase(adminActions.userGet.pending, (state) => {
            state.loading = true
            state.error = false
        })
        builder.addCase(adminActions.userGet.rejected, (state, { payload }) => {
            state.loading = false
            state.error = true
            toast.error((payload as { message: string })?.message)
        })
        // user get

        // user edit
        builder.addCase(adminActions.userEdit.fulfilled, (state, { payload }) => {
            state.loading = false
            state.error = false
            toast.success((payload as { message: string })?.message)
        })
        builder.addCase(adminActions.userEdit.pending, (state) => {
            state.loading = true
            state.error = false
        })
        builder.addCase(adminActions.userEdit.rejected, (state, { payload }) => {
            state.loading = false
            state.error = true
            toast.error((payload as { message: string })?.message)

        })
        // user edit

        // mentor get all
        builder.addCase(adminActions.mentorGetAll.fulfilled, (state, { payload }) => {
            state.loading = false
            state.error = false
            state.mentors = payload?.mentors
        })
        builder.addCase(adminActions.mentorGetAll.pending, (state) => {
            state.loading = true
            state.error = false
        })
        builder.addCase(adminActions.mentorGetAll.rejected, (state, { payload }) => {
            state.loading = false
            state.error = true
            toast.error((payload as { message: string })?.message)
        })
        // mentor get all

        // mentor get
        builder.addCase(adminActions.mentorGet.fulfilled, (state, { payload }) => {
            state.loading = false
            state.error = false
            state.mentor = payload?.mentor
        })
        builder.addCase(adminActions.mentorGet.pending, (state) => {
            state.loading = true
            state.error = false
        })
        builder.addCase(adminActions.mentorGet.rejected, (state, { payload }) => {
            state.loading = false
            state.error = true
            toast.error((payload as { message: string })?.message)
        })
        // mentor get
    },
})

export default adminSlice