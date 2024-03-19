import React from 'react'
import Button from '../Button';
import UserFilter from './UserFilter';
import StatusFilter from './StatusFilter';
import DateTypeFilter from './DateTypeFilter';

const FilterSidebar = ({
    developer,
    setDeveloper,
    client,
    setClient,
    leadDeveloper,
    setLeadDeveloper,
    pm,
    setPm,
    status,
    setStatus,
    search,
    setSearch,
    dateType,
    setDateType,
    close,
    isDev
}) => {
  return (
    <div className='sp1_filter_sidebar'>
        <div className='sp1_filter_sidebar_header'>
            <h4>Filter</h4>
            <Button variant='tertiary' onClick={close}>
                <i className='fa-solid fa-xmark' />
            </Button>
        </div>


        <div className='p-3 d-flex flex-column' style={{gap: '10px'}}>   

            <UserFilter 
                title="Dispute Raised By" 
                state={developer}
                setState={setDeveloper}
                roleIds={[4,5,6, 7, 9, 10]}
            />
            
            <UserFilter 
                title="Dispute Raised Against" 
                state={developer}
                setState={setDeveloper}
                roleIds={[4,5,6, 7, 9, 10]}
            />
            

            <UserFilter 
                title="Client" 
                state={client}
                setState={setClient}
                roleIds={null}
            /> 
            

            <UserFilter 
                title="Project Manager" 
                state={pm}
                setState={setPm}
                roleIds={[4]}
            />  
             
            <StatusFilter state={status} setState={setStatus} />
        </div>
    </div>
  )
}

export default FilterSidebar