import React from 'react'
import { Switch, Route } from 'react-router-dom';

import RegisterStudent from '../pages/Student/RegisterStudent'
import RegisterTeacher from '../pages/Teacher/RegisterTeacher'
import AssignStudentSubject from '../pages/Student/AssignStudentSubject'
import AssignTeacherSubject from '../pages/Teacher/AssignTeacherSubject'
import AssignTeacherSection from '../pages/Teacher/AssignTeacherSection'

import AttachModule from '../pages/Attach/AttachModule'
import AttachAssignment from '../pages/Attach/AttachAssignment'
import AttachExam from '../pages/Attach/AttachExam'

import Information from '../pages/Setting/Information'
import SectionClass from '../pages/Setting/SectionClass'

function RouterConfig() {
    return (
        <Switch>
            <Route path="/register_student" component={RegisterStudent} />
            <Route path="/register_teacher" component={RegisterTeacher} />
            <Route path="/assign_student_subject" component={AssignStudentSubject} />
            <Route path="/assign_teacher_subject" component={AssignTeacherSubject} />
            <Route path="/assign_teacher_section" component={AssignTeacherSection} />

            <Route path="/attach_module" component={AttachModule} />
            <Route path="/attach_assignment" component={AttachAssignment} />
            <Route path="/attach_exam" component={AttachExam} />

            <Route path="/change_information" component={Information} />
            <Route path="/add_section_subject" component={SectionClass} />


        </Switch>
    )
}

export default RouterConfig
